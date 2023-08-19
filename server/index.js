import cors from "cors";
import express from "express";

import { PORT } from "./constants/server.js";

import PlayerRanking from "./models/playerRanking.js";

import { getPlayerRankingsJsonFromCsv } from "./services/parserService.js";

const app = express();

app.get("/rankings", cors(), async ({ query }, res) => {
    const playerRankingsJson = await getPlayerRankingsJsonFromCsv();

    return res.send(playerRankingsJson.map(PlayerRanking));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
