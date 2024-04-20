import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectToMongoDB from "./db/mongodb.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT;

dotenv.config();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json()); // parse incoming requests with JSON
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})