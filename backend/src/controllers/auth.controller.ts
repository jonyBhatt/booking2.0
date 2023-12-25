import bycryptjs from "bcryptjs";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import User from "../models/user.model";

export const AuthController = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.json(400).json({ message: error.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({ message: "User does not exists" });
    }

    const matchPassword = await bycryptjs.compare(password, user.password);

    if (!matchPassword) {
      return res.status(401).json({ auth: false, message: "Invalid Password" });
    }

    const token = jwt.sign(
      { userId: user.id },
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

    return res.status(200).json({ userId: user.id });
  } catch (error: any) {
    console.log(error.message);

    return res
      .status(500)
      .json({ error: error.massage, message: "Something went wrong" });
  }
};
