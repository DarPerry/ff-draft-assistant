import { stripLetters, stripNumbers } from "../util/stripText.js";

const keepers = ["Cooper Kupp", "DJ Moore", "Deebo Samuel", "Tony Pollard"];

const PlayerRanking = (playerRank) => {
    /*
   "AVG": {
      " POINTS ": "+1.4"
  },
  "% GAMES ": "56% (9/16)" */

    const adpAdjustment = Number(playerRank["ECR VS"][" ADP"].replace("+", ""));
    const overallRank = Number(playerRank["RK"]);
    const playerName = playerRank["PLAYER NAME"];

    return {
        name: playerName,
        position: stripNumbers(playerRank["POS"]),
        team: playerRank["TEAM"],
        ranks: {
            overall: overallRank,
            position: Number(stripLetters(playerRank["POS"])),
        },
        byeWeek: Number(playerRank["BYE WEEK"]),
        strengthOfSchedule: parseFloat(playerRank["STRENGTH OF SCHEDULE "]),
        tier: Number(playerRank["TIERS"]),
        adp: overallRank + adpAdjustment,
        isKeeper: false,
    };
};

export default PlayerRanking;
