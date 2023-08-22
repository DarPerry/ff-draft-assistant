import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import _ from "lodash";

import axios from "axios";
import classNames from "classnames";

import styles from "./App.module.scss";
import PlayerCard from "./components/PlayerCard/PlayerCard";

const getPlayerImage = (name) => {
    const path = `/images/${name
        .toLowerCase()
        ?.replaceAll(".", "")
        ?.replaceAll("'", "")
        ?.split(" ")
        .join("-")}.png`;

    return path;
};

const getSnakeDraftPicks = () => {
    const myPick = 8;
    const rounds = 18;
    const teamCount = 12;
    const pickAdj = teamCount - myPick;

    const picks = [];

    _.times(rounds, (round) => {
        const roundNumber = round + 1;
        const isEvenRound = roundNumber % 2 === 0;
        const isFirstRound = roundNumber === 1;

        if (isFirstRound) {
            picks.push(myPick);
            return;
        }

        if (isEvenRound) {
            const lastPick = picks.at(-1);

            picks.push(lastPick + (2 * pickAdj + 1));
        } else {
            const lastPick = picks.at(-1);

            picks.push(lastPick + (2 * (teamCount - pickAdj) - 1));
        }
    });

    console.log(picks);
    return picks;
};

const checkIfMyPick = (pick) => getSnakeDraftPicks().includes(pick);

function App() {
    const [rankings, setRankings] = useState(null);
    const [positionFilter, setPositionFilter] = useState("ALL");

    getSnakeDraftPicks();

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const { data } = await axios.get("http://localhost:3170/rankings");

            console.log("response", data);
            setRankings(data);
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    if (rankings === null) return <div>Loading...</div>;

    const getNumberSuffix = (number) => {
        switch (number) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return (
        <div>
            <div className={styles.header}>Header</div>
            <div className={styles.main}>
                <div className={styles.sidebar}>
                    <div className={styles.filter}>
                        {[
                            "ALL",
                            "QB",
                            "RB",
                            "WR",
                            "TE",
                            "FLEX",
                            "K",
                            "DST",
                        ].map((position) => {
                            return (
                                <div
                                    className={classNames(
                                        styles.positionFilterOption,
                                        styles[position],
                                        positionFilter === position &&
                                            styles.active
                                    )}
                                    onClick={() => setPositionFilter(position)}
                                >
                                    {position}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.players}>
                        {rankings
                            .filter(({ isKeeper }) => !isKeeper)
                            .map((player, index) => {
                                const {
                                    name,
                                    ranks,
                                    position,
                                    team,
                                    potentialPositionNumberOne,
                                    potentialPositionTopTwelve,
                                    isLoved,
                                } = player;

                                const isMyPick = checkIfMyPick(index + 1);
                                // const [showDraftButton, setShowDraftButton] = useState(false);

                                return (
                                    <>
                                        {index === 0 && (
                                            <div className={styles.divider2}>
                                                <div
                                                    className={styles.nextPick}
                                                >
                                                    Start of Draft
                                                </div>
                                            </div>
                                        )}
                                        {isMyPick && (
                                            <div className={styles.divider}>
                                                <div
                                                    className={styles.nextPick}
                                                >
                                                    {Math.ceil(
                                                        (index + 1) / 12
                                                    )}
                                                    {getNumberSuffix(
                                                        Math.ceil(
                                                            (index + 1) / 12
                                                        )
                                                    )}{" "}
                                                    {"  "}
                                                    Round Pick
                                                </div>
                                            </div>
                                        )}
                                        {index % 12 === 0 && (
                                            <div className={styles.divider2}>
                                                <div
                                                    className={styles.nextPick}
                                                >
                                                    Start of Round{" "}
                                                    {Math.ceil(
                                                        (index + 1) / 12
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {(positionFilter === "ALL" ||
                                            (positionFilter === "FLEX" &&
                                                ["RB", "WR", "TE"].includes(
                                                    position
                                                )) ||
                                            position === positionFilter) && (
                                            <PlayerCard
                                                player={player}
                                                setSelectedPlayer={
                                                    setSelectedPlayer
                                                }
                                            />
                                        )}
                                    </>
                                );
                            })}
                    </div>
                </div>
                <div className={styles.content}>
                    <div
                        className={classNames(styles.playerCard, styles.light)}
                    >
                        {selectedPlayer?.name}
                        {selectedPlayer?.potentialPositionNumberOne && (
                            <div className={styles.badge}>
                                <div></div>
                                <div>Potential Position #1</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        // <>
        //   <div>
        //     <a href="https://vitejs.dev" target="_blank">
        //       <img src={viteLogo} className="logo" alt="Vite logo" />
        //     </a>
        //     <a href="https://react.dev" target="_blank">
        //       <img src={reactLogo} className="logo react" alt="React logo" />
        //     </a>
        //   </div>
        //   <h1>Vite + React</h1>
        //   <div className="card">
        //     <button onClick={() => setCount((count) => count + 1)}>
        //       count is {count}
        //     </button>
        //     <p>
        //       Edit <code>src/App.jsx</code> and save to test HMR
        //     </p>
        //   </div>
        //   <p className="read-the-docs">
        //     Click on the Vite and React logos to learn more
        //   </p>
        // </>
    );
}

export default App;
