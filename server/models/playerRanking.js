import { stripLetters, stripNumbers } from "../util/stripText.js";

const keepers = [
    "Nick Chubb",
    "Cooper Kupp",
    "Patrick Mahomes II",
    "DJ Moore",
    "A.J. Brown",
    "Josh Jacobs",
    "Jalen Hurts",
    "DK Metcalf",
    "Amon-Ra St. Brown",
    "DeVonta Smith",
    "Kenneth Walker III",
    "DeAndre Hopkins",
    "Justin Fields",
    "Michael Thomas",
    "Deebo Samuel",
    "T.J. Hockenson",
    "Jaylen Waddle",
    "Garrett Wilson",
    "Chris Olave",
    "Miles Sanders",
    "Tony Pollard",
    "Christian Kirk",
    "Mike Williams",
    "Rhamondre Stevenson",
    "Jared Goff",
    "Khalil Herbert",
    "Deshawn Watson",
];
const potentialWrOnes = [
    "Justin Jefferson",
    "Ja'Marr Chase",
    "CeeDee Lamb",
    "A.J. Brown",
    "Amon-Ra St. Brown",
    "DK Metcalf",
];

const potentialRbOnes = [
    "Bijan Robinson",
    "Jonathan Taylor",
    "Josh Jacobs",
    "Rhamondre Stevenson",
    "Breece Hall",
];

const potentialTopTwelveTes = [
    "Travis Kelce",
    "Mark Andrews",
    "T.J. Hockenson",
    "George Kittle",
    "Kyle Pitts",
    "Dallas Goedert",
    "Darren Waller",
    "Evan Engram",
    "Pat Freiermuth",
    "David Njoku",
    "Dalton Schultz",
    "Tyler Higbee",
];

const potentialTopTwelveRbs = [
    "Bijan Robinson",
    "Saquon Barkley",
    "Rhamondre Stevenson",
    "Breece Hall",
    "Najee Harris",
    "Travis Etienne Jr.",
    "Dameon Pierce",
    "Rachaad White",
    "Javonte Williams",
    "Brian Robinson Jr.",
];

const potentialTopTwelveWrs = [
    "Tee Higgins",
    "DK Metcalf",
    "Deebo Samuel",
    "Drake London",
    "DJ Moore",
    "Christian Watson",
    "Michael Pittman Jr.",
    "George Pickens",
    "Rashod Bateman",
    "Quentin Johnston",
];

const potentialPositionNumberOnes = [...potentialRbOnes, ...potentialWrOnes];
const potentialPositionTopTwelve = [
    ...potentialTopTwelveRbs,
    ...potentialTopTwelveTes,
    ...potentialTopTwelveWrs,
];

const LovedPlayer = (name, ...lovedBy) => {
    return {
        name,
        lovedBy,
    };
};

const lovedPlayers = [
    LovedPlayer("Chris Olave", "Mike Wright", "Jason Moore"),
    LovedPlayer("Mark Andrews", "Jason Moore"),
    LovedPlayer("Joe Mixon", "Andy Holloway", "Hayden Winks"),
    LovedPlayer("Jahmyr Gibbs", "Andy Holloway"),
    LovedPlayer("Justin Fields", "Jason Moore"),
    LovedPlayer("Justin Herbert", "Jason Moore"),
    LovedPlayer("Tyler Lockett", "Mike Wright"),
    LovedPlayer("Darren Waller", "Mike Wright"),
    LovedPlayer("Alexander Mattison", "Mike Wright"),
    LovedPlayer("James Cook", "Andy Holloway", "Rich Hribar"),
    LovedPlayer("Jahan Dotson", "Andy Holloway"),
    LovedPlayer("Mike Evans", "Andy Holloway"),
    LovedPlayer("Jordan Addison", "Jason Moore", "Hayden Winks"),
    LovedPlayer("Justin Jefferson", "Hayden Winks"),
    LovedPlayer("Saquan Barkley", "Hayden Winks"),
    LovedPlayer("Van Jefferson", "Hayden Winks"),
    LovedPlayer("Jalen Hurts", "Hayden Winks"),
    LovedPlayer("David Montgomery", "Hayden Winks"),
    LovedPlayer("Gus Edwards", "Hayden Winks"),
    LovedPlayer("Isaiah Hodgins", "Hayden Winks"),
    LovedPlayer("Ezekiel Elliott", "Hayden Winks"),
    LovedPlayer("Dameon Pierce", "Hayden Winks"),
    LovedPlayer("Zach Charbonnet", "Hayden Winks"),
    LovedPlayer("Jamaal Williams", "Hayden Winks"),
    LovedPlayer("Tyler Allgeier", "Hayden Winks"),
    LovedPlayer("Clyde Edwards-Helaire", "Hayden Winks"),
    LovedPlayer("Diontae Johnson", "Hayden Winks"),
    LovedPlayer("JuJu Smith-Schuster", "Hayden Winks"),
    LovedPlayer("Zay Flowers", "Mike Wright"),
    LovedPlayer("Jaylen Warren", "Pat Kerrane"),
    LovedPlayer("Marvin Mims Jr.", "Pat Kerrane"),
    LovedPlayer("Michael Mayern", "Pat Kerrane"),
    LovedPlayer("Breece Hall", "Pat Kerrane"),
    LovedPlayer("Terry McLaurin", "Jason Moore"),
    LovedPlayer("J.K. Dobbins", "Mike Wright"),
    LovedPlayer("Deebo Samuel", "Andy Holloway"),
    LovedPlayer("Tony Pollard", "Rich Hribar"),
    LovedPlayer("Brandin Cooks", "Rich Hribar"),
    LovedPlayer("Rashaad Penny", "Rich Hribar"),
    LovedPlayer("Geno Smith", "Rich Hribar"),
];

const topRbsFromOpportunity = [
    "Christian McCaffrey",
    "Saquon Barkley",
    "Nick Chubb",
    "Jonathan Taylor",
    "Tony Pollard",
    "Derrick Henry",
    "Rhamondre Stevenson",
    "Breece Hall",
    "Joe Mixon",
    "Aaron Jones",
    "James Conner",
    "Rachaad White",
];

const campHypePlayers = [
    "Deuce Vaughn",
    "Calvin Ridley",
    "Tank Bigsby",
    "Romeo Doubs",
    "Justyn Ross",
    "Puka Nacua",
];

const samUpsidePlayers = [
    "Jordan Love",
    "Van Jefferson",
    "Taysom Hill",
    "Zamir White",
    "Tony Pollard",
    "Miles Sanders",
    "Amari Cooper",
    "Christian Watson",
    "Jerry Jeudy",
    "Jahan Dotson",
    "George Pickens",
    "Rashaad Penny",
    "Khalil Herbert",
    "Michael Thomas",
];

const goalLineBacks = [
    "Ezekiel Elliott",
    "Austin Ekeler",
    "Derrick Henry",
    "Cam Akers",
];

const efficientRunners = [
    "Christian McCaffrey",
    "Austin Ekeler",
    "Nick Chubb",
    "Jonathan Taylor",
    "Tony Pollard",
    "Derrick Henry",
    "Aaron Jones",
    "Miles Sanders",
    "Dalvin Cook",
    "Raheem Mostert",
    "Damien Harris",
];

const rookieTes = [
    "Michael Mayer",
    "Dalton Kincaid",
    "Sam LaPorta",
    "Luke Musgrave",
];

const playersOffDraftBoard = [...rookieTes];

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
        isKeeper: keepers.includes(playerName),
        potentialPositionNumberOne:
            potentialPositionNumberOnes.includes(playerName),
        potentialPositionTopTwelve:
            potentialPositionTopTwelve.includes(playerName),
        isLoved: lovedPlayers.some(({ name }) => name === playerName),
        hasTopRbOpportunity: topRbsFromOpportunity.includes(playerName),
        hasCampHype: campHypePlayers.includes(playerName),
        hasSamUpside: samUpsidePlayers.includes(playerName),
        isGoalLineBack: goalLineBacks.includes(playerName),
        isEfficientRunner: efficientRunners.includes(playerName),
        isOffDraftBoard: playersOffDraftBoard.includes(playerName),
    };
};

export default PlayerRanking;
