import { check } from "express-validator";
import express from "express";
import { AuthController } from "../controllers/auth.controller";
const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required & minimum 4 characters long")
      .isString()
      .isLength({ min: 4 }),
  ],
  AuthController
);

export { router as AuthRouter };
