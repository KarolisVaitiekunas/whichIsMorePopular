import express from "express";
const router = express.Router();

import { getGames } from "../controllers/gamesController";

router.get("/", getGames);

export default router;
