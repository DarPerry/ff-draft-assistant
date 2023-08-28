import _ from "lodash";
import axios from "axios";
import classNames from "classnames";
import { useEffect, useState } from "react";

import "./App.css";
import styles from "./App.module.scss";

import PlayerCard from "./components/PlayerCard/PlayerCard";
import PickCounter from "./components/PickCounter/PickCounter";

const tiersToShow = {
    QB: 5,
    WR: 10,
    TE: 5,
    K: 3,
    DST: 3,
};

function App() {
    const [currentPick, setCurrentPick] = useState(1);
    const [rankings, setRankings] = useState(null);
    const [positionFilter, setPositionFilter] = useState("ALL");
    const [enabledPositions, setEnabledPositions] = useState({
        OVR: true,
        QB: true,
        RB: true,
        WR: true,
        TE: true,
        K: true,
        DST: true,
    });

    const positions = ["QB", "RB", "WR", "TE", "K", "DST"];

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get("http://localhost:3170/rankings");

            setRankings(data);
        }
        fetchData();
    }, []);

    const goToNextPick = () => setCurrentPick(currentPick + 1);

    if (rankings === null) return <div>Loading...</div>;

    const PositionBoard = ({ position }) => {
        const filteredPositionPlayers = rankings[position];

        return (
            <div className={styles.sidebar}>
                <div className={styles.players}>
                    {filteredPositionPlayers.map((player, index) => {
                        const {
                            name,
                            ranks,
                            team,
                            potentialPositionNumberOne,
                            potentialPositionTopTwelve,
                            isLoved,
                            tier,
                            ...rest
                        } = player;

                        // const [showDraftButton, setShowDraftButton] = useState(false);

                        const showTierBreak =
                            index === 0 ||
                            tier !== filteredPositionPlayers[index - 1].tier;

                        if (
                            tiersToShow[position] &&
                            tier > tiersToShow[position]
                        )
                            return null;

                        if (position === "WR") {
                            console.log(
                                name,
                                "tier",
                                tier,
                                "previousPlayerTier",
                                rankings[position][index - 1]?.tier,
                                "==>",

                                tier !== rankings[position][index - 1]?.tier
                            );
                        }

                        return (
                            <>
                                {showTierBreak && (
                                    <div className={styles.divider2}>
                                        <div className={styles.nextPick}>
                                            Tier {tier}
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
                                        goToNextPick={goToNextPick}
                                        currentPick={currentPick}
                                        setCurrentPick={setCurrentPick}
                                    />
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className={styles.header}>
                <div>
                    Show Board For:
                    <div className={styles.filter}>
                        {["ALL", "QB", "RB", "WR", "TE", "K", "DST"].map(
                            (position) => {
                                return (
                                    <div
                                        className={classNames(
                                            styles.positionFilterOption,
                                            styles[position],
                                            enabledPositions[position] &&
                                                styles.active
                                        )}
                                        onClick={() =>
                                            setEnabledPositions({
                                                ...enabledPositions,
                                                [position]:
                                                    !enabledPositions[position],
                                            })
                                        }
                                    >
                                        {position}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <PickCounter currentPick={currentPick} />
            </div>
            <div className={styles.main}>
                <PositionBoard position={"OVR"} />
                {positions
                    .filter((p) => enabledPositions[p])
                    .map((position) => (
                        <PositionBoard key={position} position={position} />
                    ))}
            </div>
        </div>
    );
}

export default App;
