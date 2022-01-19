import { Request, Response } from "express";

const errorHandler = (req: Request, res: Response): void => {
  const responseHTML = "<p>There was an error related  to process image</p>";
  res.send(responseHTML);
};

export default errorHandler;
