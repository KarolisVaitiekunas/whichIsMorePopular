require("dotenv").config({ path: "./config/.env" });
import express from "express";
import cors from "cors";
import connect from "./db/connect";
import log from "./logger";

const HOST = String(process.env.HOST);
const PORT = Number(process.env.PORT);
const CLIENT_PORT = Number(process.env.CLIENT_PORT);

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(cors({ credentials: true, origin: `http://${HOST}:${CLIENT_PORT}` }));

import gameRoute from "./routes/games";
app.use("/games", gameRoute);

app.listen(PORT, () => {
  log.info(`Server listening at http://${HOST}:${PORT}`);
  connect();
});
