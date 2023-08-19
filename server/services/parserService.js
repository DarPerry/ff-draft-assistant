import csvtojson from "csvtojson";

import { serverPath } from "../constants/filePaths.js";

export const getPlayerRankingsJsonFromCsv = async () =>
    await csvtojson().fromFile(`${serverPath}/fantasyProsTop25Experts.csv`);
