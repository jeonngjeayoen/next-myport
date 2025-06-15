"use client";

import styles from "./team.module.scss"
import TinkleBack from "../../semantic/back/tinkleBack.component";
import PcBox from "./components/pcdeviceBox.component";

import { useEffect, useState } from "react";

export default function Team() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(true);
    }, []);
    return (
        <main className={styles.team_wrap}>
            <section className={styles.section01}>
                <PcBox />
            </section>
            <div className={styles.back_illu}>
                <TinkleBack />
                <div className={`${styles.illu} ${isActive ? styles.active : ""}`}></div>
            </div>
        </main>
    )
}