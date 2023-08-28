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
    "Darren Waller",
    "Kenny Pickett",
    "Jayden Reed",
];

const isValuableHandcuff = ["Tank Bigsby", "Jaylen Warren"];

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

const potentialBusts = ["JK Dobbins", "Travis Etienne Jr.", "DeAndre Hopkins"];

const landminePlayers = [
    "Bijan Robinson",
    "Jonathan Taylor",
    "Najee Harris",
    "Chris Olave",
    "Jahmyr Gibbs",
    "Aaron Jones",
    "Evan Engram",
    "Quentin Johnston",
    "De'Von Achane",
    "Jameson Williams",
    "Greg Dulcich",
    "Darnell Mooney",
    "Mike Evans",
];

const hasNegativeSamUpside = [
    "Kirk Cousins",
    "Joe Mixon",
    "Travis Ettiene Jr.",
    "Deebo Samuel",
    "Dameon Pierce",
    "Rachaad White",
    "Dalvin Cook",
    "Daniel Jones",
];

const playersOffDraftBoard = [];

const isLeapYearCandidate = [
    "Justin Fields",
    "Kenny Pickett",
    "Jordan Love",
    "Sam Howell",
    "Desmond Ridder",
    "Trey Lance",
    "Mac Jones",
];

// 1st Round Rookie RBs finish as RB6 on average
// 1st Round Rookie WR has finished top 24 in 11 straight years

const firstRoundRbOrWr = [
    "Bijan Robinson",
    "Jahmyr Gibbs",
    "Zay Flowers",
    "Quentin Johnston",
    "Jaxon Smith-Njigba",
    "Jordan Addison",
];

const recieversWithRookieQbs = [
    "Hayden Hurst",
    "Jelani Woods",
    "Dalton Schultz",
    "Nico Collins",
    "DJ Chark Jr.",
    "Adam Thielen",
    "Michael Pittman Jr.",
    "Jonathan Mingo",
    "Alec Pierce",
    "John Metchie III",
    "Robert Woods",
    "Terrace Marshall Jr.",
    "Josh Downs",
    "Tank Dell",
    "Isaiah McKenize",
    "Laviska Shenault Jr.",
];

const lowRyoeAndLowEpaPlayers = [
    "David Montgomery",
    "Alvin Kamara",
    "Antonio Gibson",
    "Leonard Fournette",
    "Najee Harris",
    "Joe Mixon",
    "Cam Akers",
];

const isFightingToStart = [
    "Jaxon Smith-Njigba",
    "Quentin Johnston",
    "Greg Dulcich",
];

const mainlySlotPlayers = ["Rondale Moore", "Christian Kirk"];

const negativeCampBuzz = ["Deshaun Watson"];

const isNotGoalLineBack = ["Kenneth Walker III", "Rhamondre Stevenson"];

const playerNotes = {
    "Geno Smith": { good: ["3 Great WRs & Most accurate QB last season"] },
    "Najee Harris": { good: ["Jaylen Warren is a threat"] },
    "JK Dobbins": {
        bad: [
            "@DynastyIM - 97% of 15+ PPG RBs Have EITHER 50% Carry % or 10% Target Share he has had neother",
        ],
    },
    "Jerry Jeudy": {
        good: ["@swainmcfarland - 23% TS & 30 % Air yard share when healthy"],
    },
    "Jordan Addison": {
        good: ["@HaydenWinks - Replacing Player that is 2nd in routes run"],
    },
    "Rashod Bateman": {
        good: ["@DerekBrown - 11th in Route Win Rate Per Rotounderworld"],
    },
};

const projectedNegativeRegression = [
    "Tua Tagovailoa",
    "Tyreek Hill",
    "Jaylen Waddle",
];

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
        isPotentialBust: [...potentialBusts, ...landminePlayers].includes(
            playerName
        ),
        isLeapYearCandidate: isLeapYearCandidate.includes(playerName),
        isFirstRoundRbOrWr: firstRoundRbOrWr.includes(playerName),
        hasRookieQb: recieversWithRookieQbs.includes(playerName),
        hasNegativeCampBuzz: negativeCampBuzz.includes(playerName),
        hasLowRyoeAndLowEpa: lowRyoeAndLowEpaPlayers.includes(playerName),
        isFightingToStart: isFightingToStart.includes(playerName),
        isMainlySlotPlayer: mainlySlotPlayers.includes(playerName),
        isNotGoalLineBack: isNotGoalLineBack.includes(playerName),
        projectedNegativeRegression:
            projectedNegativeRegression.includes(playerName),
        isValuableHandcuff: isValuableHandcuff.includes(playerName),
        hasNegativeSamUpside: hasNegativeSamUpside.includes(playerName),
    };
};

export default PlayerRanking;
