import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { mongo } from "mongoose";
import { User } from "../models/userModel.js";

// POST method to register a user
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (user) {
    res.status(200).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.status(200).json({ newUser, message: "New user registered" });
};

// POST method to login a user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(500).json({ message: "User doesn't exists" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(404)
      .json({ message: "Username or password is incorrect" });
  }
  const token = await jwt.sign({ id: user._id }, "secret");
  res.status(200).json({ token, userID: user.__id });
};
