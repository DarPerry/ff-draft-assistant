import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./PlayerCard.module.scss";

import { iconMap } from "../../helpers/test";
import teamColors from "../../styles/teamColors";

const PlayerCard = ({ player }) => {
    const [timerId, setTimerId] = useState(null);
    const [removing, setRemoving] = useState(false);
    const [showPlayer, setShowPlayer] = useState(true);

    const { name, ranks, position, team, isOffDraftBoard } = player;
    const { overall: overallRank, position: positionRank } = ranks;

    const [firstName, ...restOfName] = name.split(" ");

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
                    Circle Comp
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
        </div>
    );
};

//Prop Validation
PlayerCard.propTypes = {
    player: PropTypes.array,
};

export default PlayerCard;
