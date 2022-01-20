import fs from "fs";
import { Request, Response, NextFunction } from "express";
import path from "path";
import { fileExists } from "../routes/fileExists";
import { sharpResize } from "../routes/sharpResize";

const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { filename, height, width } = req.query;

  const f: string = filename as unknown as string;
  const h: number | null = height ? parseInt(height as string, 10) : null;
  const w: number | null = width ? parseInt(width as string, 10) : null;

  try {
    const imagePath = `${f}${w}x${h}.jpg`;
    const resizePath = `./public/${f}${w}x${h}.jpg`;
    const imagePathExist = await fileExists(path.join("public", imagePath));

    if (imagePathExist) {
      res.sendFile(`/${imagePath}`, { root: path.join("./public") });
    } else {
      const response = await sharpResize(f, h, w);
      response.toFile(resizePath, (err: Error) => {
        if (err) {
          res.status(403).send({
            ok: "failed",
            message: err.message,
          });
        } else {
          res.sendFile(`/${imagePath}`, { root: path.join("./public") });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const readThumbnailFullPath = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const folder = "public";
  const data = fs.readdirSync(folder);

  console.log("data", data);

  const thubnails = data.map((data) => {
    return `http://localhost:3000/${data}`;
  });
  res.status(200).send(thubnails);
};

export default resizeImage;
