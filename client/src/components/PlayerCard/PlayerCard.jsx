import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./PlayerCard.module.scss";

import { iconMap } from "../../helpers/fontAwesome";
import teamColors from "../../styles/teamColors";

const transitionDuration = 750;

const PlayerCard = ({ player, goToNextPick }) => {
    const [timerId, setTimerId] = useState(null);
    const [removing, setRemoving] = useState(false);
    const [showPlayer, setShowPlayer] = useState(true);

    const { name, ranks, position, team, isOffDraftBoard } = player;
    const { overall: overallRank, position: positionRank } = ranks;

    const [firstName, ...restOfName] = name.split(" ");

    const iconsPlayerHas = Object.entries(iconMap).filter(
        ([condition, { icon, morale }]) => {
            if (player[condition]) return true;
        }
    );

    const iconCount = iconsPlayerHas.length;
    const goodIconCount = iconsPlayerHas.filter(
        ([condition, { icon, morale }]) => {
            if (morale === "good") return true;
        }
    ).length;

    const goodIconCountPercentage = Math.round(
        (goodIconCount / iconCount) * 100
    );

    if (!showPlayer) return null;

    return (
        <div
            className={classNames(
                styles.playerCard,
                isOffDraftBoard && styles.faded
            )}
            onMouseDown={() => {
                setRemoving(true);
                //after 2 seconds do this
                const timer = setTimeout(() => {
                    setShowPlayer(false);
                }, transitionDuration);

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
                style={{
                    transitionDuration: `${transitionDuration}ms`,
                }}
            >
                <i className="fa-solid fa-xmark" />
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
                        {Object.entries(iconMap).map(
                            ([condition, { icon, morale }]) => {
                                if (player[condition])
                                    return (
                                        <i
                                            className={classNames(
                                                icon,
                                                styles[condition]
                                            )}
                                        />
                                    );
                            }
                        )}
                    </div>
                    {position ? (
                        <div
                            className={classNames(
                                styles.positionBadge,
                                styles[position]
                            )}
                        >
                            {position}
                            {positionRank}
                        </div>
                    ) : (
                        <>
                            {iconCount ? (
                                <div
                                    className={styles.progressBar}
                                    style={{
                                        background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(green ${
                                            goodIconCountPercentage
                                                ? `${goodIconCountPercentage}%`
                                                : 0
                                        }, red 0)`,
                                    }}
                                >
                                    {goodIconCount}/{iconCount}
                                </div>
                            ) : null}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

//Prop Validation
PlayerCard.propTypes = {
    player: PropTypes.array,
};

export default PlayerCard;
