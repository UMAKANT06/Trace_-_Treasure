// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { PORT, MONGO_URL } from './utils/getEnv';
import { fileURLToPath } from "url";
/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
//DATABASE CONNECTION
/* MONGOOSE SETUP */
mongoose.connection.on("connecting", () => {
    console.log("Connecting to Database...");
});
mongoose.connection.on("connected", () => {
    console.log("Connected to Database");
});
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from Database");
});
mongoose.connection.on("error", (err) => {
    console.log(err);
});
mongoose
    .connect(MONGO_URL)
    .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})
    .catch((error) => console.log(`${error} did not connect`));
// let gfs: mongoose.mongo.GridFSBucket;
// mongoose.connection.once("open", () => {
//     gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
//         bucketName: "uploads",
//     });
// });
// export { gfs };
//# sourceMappingURL=main.js.map