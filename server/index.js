import cors from "cors";
import express from "express";
import csvtojson from "csvtojson";

import { PORT } from "./constants/server.js";

import PlayerRanking from "./models/playerRanking.js";

import { getPlayerRankingsJsonFromCsv } from "./services/parserService.js";
import { serverPath } from "./constants/filePaths.js";

const app = express();

app.get("/rankings", cors(), async ({ query }, res) => {
    const positions = ["QB", "RB", "WR", "TE", "K", "DST"];
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

app.get("/rankings", cors(), async ({ query }, res) => {
    const positions = ["QB", "RB", "WR", "TE", "K", "DST"];
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

app.get("/adp", cors(), async ({ query }, res) => {
    const json = await csvtojson().fromFile(
        `${serverPath}/data/Underdog 4for4 ADP.csv`
    );

    return res.send(
        json.reduce((acc, player) => {
            acc[player["Player"]] = Number(player["Current ADP"]);

            return acc;
        }, {})
    );
});

//Vegas Rankings

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
