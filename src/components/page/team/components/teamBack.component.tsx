"use client";

import { useEffect, useRef } from "react";
import styles from "./teamBack.module.scss";

export default function Teamback() {
    const refs = {
        lightning01: useRef<HTMLDivElement>(null),
        lightning02: useRef<HTMLDivElement>(null),
        sumkwang: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const l1 = refs.lightning01.current;
        const l2 = refs.lightning02.current;
        const sum = refs.sumkwang.current;

        if (!l1 || !l2 || !sum) return;

        // 타이밍 시퀀스 정의
        const actions: [number, () => void][] = [
            [100, () => l1.classList.add(styles.on)],
            [200, () => l1.classList.remove(styles.on)],
            [300, () => sum.classList.add(styles.on01)],
            [500, () => sum.classList.remove(styles.on01)],
            [600, () => l2.classList.add(styles.on)],
            [700, () => l2.classList.remove(styles.on)],
            [800, () => sum.classList.add(styles.on01)],
            [900, () => sum.classList.add(styles.on02)],
            [1500, () => sum.classList.remove(styles.on01)],
            [1500, () => sum.classList.remove(styles.on02)],
        ];

        actions.forEach(([delay, func]) => {
            setTimeout(func, delay);
        });
    }, []);

    return (
        <>
            <div className={styles.team_back_wrap}>
                <div className={styles.sumkwang} ref={refs.sumkwang}>
                </div>
            </div>
            <div className={styles.lightning_box}>
                <div className={styles.lightning01} ref={refs.lightning01}></div>
                <div className={styles.lightning02} ref={refs.lightning02}></div>
            </div>
        </>
    );
}
