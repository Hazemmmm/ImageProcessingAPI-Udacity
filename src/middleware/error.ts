import { Request, Response } from "express";

const errorHandler = (req: Request, res: Response): void => {
  res.send("<p>There was an error related  to process image</p>");
  
};

export default errorHandler;
