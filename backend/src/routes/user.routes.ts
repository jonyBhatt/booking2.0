import express from "express";
import { check } from "express-validator";
import { RegisterHandler } from "../controllers/user.controller";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "Fist Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "email is required").isEmail(),
    check("password", "password is required").isString().isLength({ min: 4 }),
  ],
  RegisterHandler
);

export { router as UserRouter };
