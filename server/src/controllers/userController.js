import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { mongo } from "mongoose";
import { User } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  res.status(200).json(user);
};

export const loginUser = async (req, res) => {};
