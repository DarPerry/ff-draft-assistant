import cors from "cors";
import express from "express";

import { PORT } from "./constants/server.js";

import PlayerRanking from "./models/playerRanking.js";

import { getPlayerRankingsJsonFromCsv } from "./services/parserService.js";

const app = express();

app.get("/rankings", cors(), async ({ query }, res) => {
    const positions = ["OVR", "QB", "RB", "WR", "TE", "K", "DST"];
    const allRankings = await Promise.all(
        positions.map(getPlayerRankingsJsonFromCsv)
    );

    return res.send(
        positions.reduce((rankingsByPosition, position, index) => {
            rankingsByPosition[position] = allRankings[index];

            return rankingsByPosition;
        }, {})
    );
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
