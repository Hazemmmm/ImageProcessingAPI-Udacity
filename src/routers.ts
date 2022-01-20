import express from "express";
import resizeImage, { readThumbnailFullPath } from "./controllers/imageProces";
import validateParams from "./middleware/validateParams";

const router = express();

router.get("/api/images", validateParams, resizeImage);
router.get("/api/thubnails", readThumbnailFullPath);

export default router;
