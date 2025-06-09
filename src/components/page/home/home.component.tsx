"use client";

import Header from "./components/headerMain.component";
import Pathbox from "./components/pathBox.component";
import Titlebox from "./components/Titlebox.component";
import TinkleBack from "../../semantic/back/tinkleBack.component";
import TipingBox from "./components/tipingBox.component";


import { useEffect, useState } from 'react';
import styles from "./home.module.scss";

export default function HomeComponent() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={styles.inner}>
            <Header />
            <main>
                <div className={styles.planet_box}>
                    <div className={styles.real_plate}></div>
                    <Pathbox />
                    <div className={styles.half_box}>
                        <div className={styles.half}></div>
                    </div>
                    <Titlebox />
                </div>
            </main >
            <TipingBox />
            <div className={styles.back_bg}>
                <div className={styles.back_bg_box}>
                    <div className={`${styles.won} ${isActive ? styles.active : ''}`}></div>
                    <div className={`${styles.bg_line} ${isActive ? styles.active : ''}`}></div>
                </div>
                <div className={`${styles.back_bg_box02} ${isActive ? styles.active : ''}`}>
                    <div className={`${styles.won} ${isActive ? styles.active : ''}`}></div>
                    <div className={`${styles.bg_line} ${isActive ? styles.active : ''}`}></div>
                </div>
            </div>
            <div className={styles.star}>
                <span className={styles.star_span_star01}>
                    <i className={styles.real_star}></i>
                    <i className={styles.star_twinkle}></i>
                </span>
                <span className={styles.star_span_star02}>
                    <i className={styles.real_star}></i>
                    <i className={styles.star_twinkle}></i>
                </span>
                <span className={styles.star_span_star03}>
                    <i className={styles.real_star}></i>
                    <i className={styles.star_twinkle}></i>
                </span>
            </div>
            <TinkleBack />
        </div >
    )
};


