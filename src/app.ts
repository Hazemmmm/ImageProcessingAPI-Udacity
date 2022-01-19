import { cors } from 'cors';
import express, { Request, Response } from "express";
import errorHandler from './middleware/error';
import logger from './middleware/logger';
import router from "./routers";


const app = express();
app.use(router);
app.use(cors);
app.use(errorHandler);
app.use(logger);

const port = 3000;
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello and welcome from Iamge Processing API Udacity Project");
});

app.listen(port, (): void => {
  console.log(`"Server is running on port ${port}`);
});
