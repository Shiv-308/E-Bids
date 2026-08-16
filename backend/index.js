import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});