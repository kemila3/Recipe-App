import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import { userRouter } from "./routes/userRoutes.js";
import { connectDB } from "../src/config/dbConnection.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

app.listen(3001, () => console.log("server running successfuly"));
