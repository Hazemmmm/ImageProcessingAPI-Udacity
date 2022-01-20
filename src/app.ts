import express, { Request, Response } from "express";
import cors from "cors";
import errorHandler from "./middleware/error";
import logger from "./middleware/logger";
import router from "./routers";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.use(logger);

// idon't know why app crash when use cors !
// app.use(cors);

app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello and welcome from Iamge Processing API Udacity Project");
});

app.listen(port, (): void => {
  console.log(`"Server is running on port ${port}`);
});
