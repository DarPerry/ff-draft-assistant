import csvtojson from "csvtojson";

import { serverPath } from "../constants/filePaths.js";
import PlayerRanking from "../models/playerRanking.js";

export const getPlayerRankingsJsonFromCsv = async (position) => {
    const json = await csvtojson().fromFile(
        `${serverPath}/FantasyPros_2023_Draft_${position}_Rankings.csv`
    );

    return json.map(PlayerRanking);
};
