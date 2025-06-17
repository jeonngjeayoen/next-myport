"use client";

import styles from "./team.module.scss"
import TinkleBack from "../../semantic/back/tinkleBack.component";
import PcBox from "./components/pcdeviceBox.component";
import MoBox from "./components/mobileBox.component";
import Teamback from "./components/teamBack.component";
import { useEffect, useState } from "react";

export default function Team() {
    const [index, setIndex] = useState(3);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
        setIndex(3); // 초기 탭
    }, []);

    return (
        <main className={styles.team_wrap}>
            <section className={styles.section01}>
                <PcBox index={index} onTabChange={setIndex} />
                <MoBox index={index} />
            </section>
            <div className={styles.back_illu}>
                <div className={`${styles.illu} ${isActive ? styles.active : ""}`}></div>
            </div>
            <TinkleBack />
            <Teamback />
        </main>
    );
}
