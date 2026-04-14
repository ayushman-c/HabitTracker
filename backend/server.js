import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import connectDB from "./config/db.js"
import habitRoutes from "./routes/habitRoutes.js"

dotenv.config()
connectDB()

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/habits", habitRoutes);

app.get("/", (req,res) => {
    res.send("API is running . . .")
})

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server Running on PORT ${PORT}`);
});