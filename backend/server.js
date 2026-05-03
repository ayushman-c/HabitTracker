import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import connectDB from "./config/db.js"
import habitRoutes from "./routes/habitRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()
connectDB()

const app = express();

app.use(cors({
    origin: 'https://habit-tracker-plum-chi.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);

app.get("/", (req, res) => {
    try {
        const isWorking = true;

        if (isWorking) {
            res.send("API is running...");
        } else {
            res.send("API is not working");
        }
    } catch (error) {
        res.status(500).send("Server error : ->", error);
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});
