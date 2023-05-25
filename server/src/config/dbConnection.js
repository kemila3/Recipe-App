import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Databse connected");
  } catch (err) {
    return console.log(err);
    process.exit(1);
  }
};

export default connectDB;
