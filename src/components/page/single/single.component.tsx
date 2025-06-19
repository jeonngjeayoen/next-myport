"use client";

import { useEffect, useState } from "react";
import styles from "./single.module.scss";
import TinkleBack from "../../semantic/back/tinkleBack.component";
import Rocket from "./components/rocketBox.component"
import RotateBox from "./components/rotateBox.component"
import { useStaggeredActivation } from "./components/hooks/useStaggeredActivation";
import { rotateBoxData } from "./components/data/rotateBoxData";


export default function Single() {
    const [isActive, setIsActive] = useState(false);
    const delays = [800, 1800, 2400, 3300];
    const activeBoxes = useStaggeredActivation(rotateBoxData.length, delays);

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <main className={styles.single_wrap}>
            <section className={styles.section01}>
                <Rocket />
                <div className={styles.rotate_box_common}>
                    {rotateBoxData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles[`rotate_box_wrap0${index + 1}`]} ${activeBoxes[index] ? styles.active : ""}`}
                        >
                            <div className={styles.air_balloon}></div>
                            <RotateBox
                                title={item.title}
                                subtitle={item.subtitle}
                                detail={item.detail}
                                link={item.link}
                                classnum={item.classnum}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <div className={styles.back_illu}>
                <TinkleBack />
                <div className={`${styles.illu} ${isActive ? styles.active : ""}`}></div>
            </div>
        </main>
    );
}
