import express from "express";
import { uploadThroughFiles } from "../controllers/fileUpload";
const router = express.Router();

router.post("/upload", uploadThroughFiles);

export default router;