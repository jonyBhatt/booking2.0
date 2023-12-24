import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import User from "../models/user.model";

export const RegisterHandler = async (req: Request, res: Response) => {
  // Checking all input field are given by user
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // find existing user
    let existUser = await User.findOne({
      email: req?.body.email,
    });
    if (existUser) {
      return res.status(400).json("User already exist");
    }

    const newUser = new User(req.body);
    await newUser.save();

    const token = await jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    return res.status(201).json({ message: "created" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
