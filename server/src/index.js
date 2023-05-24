import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import { userRouter } from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter )

mongoose.connect(
  "mongodb+srv://test:test@cluster0.k0btplj.mongodb.net/Recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("server running successfuly"));
