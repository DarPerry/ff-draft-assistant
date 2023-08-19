import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";
import classNames from "classnames";

import styles from "./App.module.scss";

function App() {
    const [rankings, setRankings] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const { data } = await axios.get("http://localhost:3170/rankings");

            console.log("response", data);
            setRankings(data);
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    if (rankings === null) return <div>Loading...</div>;

    return (
        <div>
            <div className={styles.header}>Header</div>
            <div className={styles.main}>
                <div className={styles.sidebar}>
                    {rankings.map(({ name, ranks, position, team }) => {
                        const { overall: overallRank, position: positionRank } =
                            ranks;
                        return (
                            <div className={styles.playerCard}>
                                <div className={styles.rank}>
                                    {overallRank}.
                                </div>
                                <div className={styles.playerInfo}>
                                    <div className={styles.name}>{name}</div>
                                    <div className={styles.team}>{team}</div>
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
                        );
                    })}
                </div>
                <div className={styles.content}>Content</div>
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
