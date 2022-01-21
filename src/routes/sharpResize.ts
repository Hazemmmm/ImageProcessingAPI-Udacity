import sharp, { Sharp } from "sharp";

export const sharpResize = async (
  f: string | null,
  h: number | null,
  w: number | null
): Promise<Sharp> => {
  const buffer = `assets/full/${f}.jpg`;
  const image = await sharp(buffer);
  const resizeImage = await image.resize(w, h);

  return resizeImage;
};

export default sharpResize;
