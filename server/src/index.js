import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://test:test@cluster0.k0btplj.mongodb.net/Recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("server running successfuly"));
