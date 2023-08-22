import classNames from "classnames";

import styles from "./PlayerCard.module.scss";
import { useState } from "react";

const PlayerCard = ({ player, setSelectedPlayer }) => {
    const [showDraftButton, setShowDraftButton] = useState(false);
    const [removing, setRemoving] = useState(false);

    //NFL Team Colors
    const teamColors = {
        ARI: {
            primary: "#97233F",
            secondary: "#000000",
        },
        ATL: {
            primary: "#A71930",
            secondary: "#000000",
        },
        BAL: {
            primary: "#241773",
            secondary: "#000000",
        },
        BUF: {
            primary: "#00338D",
            secondary: "#C60C30",
        },
        CAR: {
            primary: "#0085CA",
            secondary: "#101820",
        },
        CHI: {
            primary: "#0B162A",
            secondary: "#C83803",
        },
        CIN: {
            primary: "#FB4F14",
            secondary: "#000000",
        },
        CLE: {
            primary: "#311D00",
            secondary: "#FF3C00",
        },
        DAL: {
            primary: "#041E42",
            secondary: "#869397",
        },
        DEN: {
            primary: "#FB4F14",
            secondary: "#002244",
        },
        DET: {
            primary: "#0076B6",
            secondary: "#B0B7BC",
        },
        GB: {
            primary: "#203731",
            secondary: "#FFB612",
        },
        HOU: {
            primary: "#03202F",
            secondary: "#A71930",
        },
        IND: {
            primary: "#002C5F",
            secondary: "#A2AAAD",
        },
        JAC: {
            primary: "#006778",
            secondary: "#9F792C",
        },
        KC: {
            primary: "#E31837",
            secondary: "#FFB81C",
        },
        LAC: {
            primary: "#002A5E",
            secondary: "#FFC20E",
        },
        LAR: {
            primary: "#002244",
            secondary: "#866D4B",
        },
        LV: {
            primary: "#000000",
            secondary: "#A5ACAF",
        },
        MIA: {
            primary: "#008E97",
            secondary: "#FC4C02",
        },
        MIN: {
            primary: "#4F2683",
            secondary: "#FFC62F",
        },
        NE: {
            primary: "#002244",
            secondary: "#C60C30",
        },
        NO: {
            primary: "#D3BC8D",
            secondary: "#101820",
        },
        NYG: {
            primary: "#0B2265",
            secondary: "#A71930",
        },
        NYJ: {
            primary: "#125740",
            secondary: "#000000",
        },
        PHI: {
            primary: "#004C54",
            secondary: "#A5ACAF",
        },
        PIT: {
            primary: "#FFB612",
            secondary: "#101820",
        },
        SEA: {
            primary: "#002244",
            secondary: "#69BE28",
        },
        SF: {
            primary: "#AA0000",
            secondary: "#B3995D",
        },
        TB: {
            primary: "#D50A0A",
            secondary: "#FF7900",
        },
        TEN: {
            primary: "#0C2340",
            secondary: "#4B92DB",
        },
        WAS: {
            primary: "#773141",
            secondary: "#FFB612",
        },
    };

    const {
        name,
        ranks,
        position,
        team,
        potentialPositionNumberOne,
        potentialPositionTopTwelve,
        isLoved,
        isOffDraftBoard,
    } = player;

    const [showPlayer, setShowPlayer] = useState(!isOffDraftBoard);

    const { overall: overallRank, position: positionRank } = ranks;

    const iconMap = {
        potentialPositionNumberOne: "fa-kit fa-solid-square-1-circle-question",
        potentialPositionTopTwelve: "fa-kit fa-solid-star-circle-question",
        isLoved: "fa-solid fa-heart",
        hasTopRbOpportunity: "fa-solid fa-weight-hanging",
        hasCampHype: "fa-solid fa-campground",
        hasSamUpside: "fa-solid fa-rocket-launch",
        isGoalLineBack: "fa-solid fa-crow",
        isEfficientRunner: "fa-solid fa-person-running-fast",
    };

    const [timerId, setTimerId] = useState(null);

    const [firstName, ...restOfName] = name.split(" ");

    if (!showPlayer) return null;

    return (
        <div
            className={classNames(styles.playerCard)}
            onClick={() => {
                setSelectedPlayer(player);
            }}
            onMouseEnter={() => setShowDraftButton(true)}
            onMouseLeave={() => setShowDraftButton(false)}
            onMouseDown={(e) => {
                setRemoving(true);
                //after 2 seconds do this
                const timer = setTimeout(() => {
                    console.log("removing");
                    setShowPlayer(false);
                }, 2000);

                setTimerId(timer);
            }}
            onMouseUp={() => {
                setRemoving(false);
                clearTimeout(timerId);
                setTimerId(null);
            }}
        >
            <div
                className={classNames(
                    styles.removeProgress,
                    removing && styles.removing
                )}
            >
                <i class="fa-solid fa-xmark"></i>{" "}
            </div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.rank}>{overallRank}.</div>
                    <div
                        className={styles.teamBubble}
                        style={{
                            backgroundColor: teamColors[team]?.primary,
                            color: teamColors[team]?.secondary,
                            borderColor: teamColors[team]?.secondary,
                        }}
                    >
                        {team}
                    </div>
                </div>

                <div className={styles.playerInfo}>
                    <div className={styles.team}>{firstName}</div>

                    <div className={styles.name}>{restOfName.join(" ")}</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.icons}>
                        {Object.entries(iconMap).map(([condition, icon]) => {
                            if (player[condition])
                                return (
                                    <i
                                        className={classNames(
                                            icon,
                                            styles[condition]
                                        )}
                                    />
                                );
                        })}
                    </div>

                    <div
                        className={classNames(
                            styles.positionBadge,
                            styles[position]
                        )}
                    >
                        {position}
                        {positionRank}
                    </div>
                </div>
            </div>
            {false && <div className={styles.removeButton}>Remove Player</div>}
        </div>
    );
};

export default PlayerCard;
