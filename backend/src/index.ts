import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./utils/db";
import { UserRouter } from "./routes/user.routes";
import { AuthRouter } from "./routes/auth.routes";

const app = express();
dotenv.config();
app.use(cors());

//connect to database
ConnectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);

// Error Handling Middleware

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
