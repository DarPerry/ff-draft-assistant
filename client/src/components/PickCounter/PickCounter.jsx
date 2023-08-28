import { getSnakeDraftPick } from "../../helpers/drafting";
import styles from "./PickCounter.module.scss";

const PickCounter = ({ currentPick }) => {
    const myDraftSlot = 8;
    const roundInDraft = 12;
    const currentRound = Math.ceil(currentPick / roundInDraft);
    const currentPickForRound = currentPick % roundInDraft;
    const myNextPickForRound = getSnakeDraftPick(myDraftSlot, currentRound);

    return (
        <div className={styles.pickCounter}>
            <div className={styles.currentPick}>
                <div className={styles.currentPickLabel}>Current Pick</div>
                <div>
                    Pick {currentRound}.
                    {!currentPickForRound ? roundInDraft : currentPickForRound}{" "}
                    (#
                    {currentPick} Overall)
                </div>
            </div>
            <div className={styles.nextPick}>
                <div>Next Turn</div>
                <div>
                    In{" "}
                    <span className={styles.picksUntilNext}>
                        {Math.abs(myNextPickForRound - currentPick) + 1}
                    </span>{" "}
                    Picks
                </div>
            </div>
        </div>
    );
};

export default PickCounter;
