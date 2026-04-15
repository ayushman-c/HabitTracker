import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import connectDB from "./config/db.js"
import habitRoutes from "./routes/habitRoutes.js"

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
app.use("/api/habits", habitRoutes);

app.get("/", (req,res) => {
    res.send("API is running . . .")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server Running on PORT ${PORT}`);
});