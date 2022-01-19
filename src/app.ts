import express, { Request, Response } from "express";

const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello and welcome from Iamge Processing API Udacity Project");
});

app.listen(port, (): void => {
  console.log(`"Server is running on port ${port}`);
});
