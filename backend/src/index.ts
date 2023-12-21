import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./utils/db";

const app = express();
dotenv.config();
app.use(cors());

//connect to database
ConnectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

// Error Handling Middleware

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
