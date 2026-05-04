import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
      index: true,
    },
    passwordHash: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      match: [/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Name can only contain letters, spaces, apostrophes, and hyphens'],
    },
  },
  { timestamps: true }
);

userSchema.virtual('password').set(function (plainPassword) {
  this._password = plainPassword;
});


userSchema.pre('validate', function () {
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required');
  }
  if (this._password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!regex.test(this._password)) {
      this.invalidate(
        'password',
        'Password must be at least 8 characters long, with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&#)'
      );
    }
  }
});

userSchema.pre('save', async function () {
  if (this._password && !this.isModified('passwordHash')) {
    this.passwordHash = await bcrypt.hash(this._password, 10);
  }
});

export default mongoose.model('User', userSchema);