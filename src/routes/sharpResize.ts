import sharp, { Sharp } from "sharp";

export const sharpResize = async (
  f: string | null,
  h: number | null,
  w: number | null
): Promise<Sharp> => {
  const buffer = `assets/full/${f}.jpg`;
  console.log("buffer", buffer);
  const image = await sharp(buffer);
  console.log("image", image);

  const resizeImage = await image.resize(w, h);
  console.log("resizeImage", resizeImage);
  return resizeImage;
};

export default sharpResize;
