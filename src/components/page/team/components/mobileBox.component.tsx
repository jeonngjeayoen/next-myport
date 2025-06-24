"use client";

import styles from "./mobileBox.module.scss";
import useTransitionStage from "./hooks/useTransitionStage";
import { useEffect } from "react";

export default function MobileBox({ index }) {
    const {
        selectedIndex,
        isActive,
        isActive02,
        screenRef,
        handleTabChange,
    } = useTransitionStage(0);

    useEffect(() => {
        if (index !== selectedIndex) {
            handleTabChange(index);
        }
    }, [index, selectedIndex, handleTabChange]);

    const screenClass = `screen0${selectedIndex + 1}`;
    return (
        <div className={styles.mo_container}>
            <div className={styles.img_box}>
                <div
                    ref={screenRef}
                    className={`
                            ${styles.screen}
                            ${styles[screenClass]}
                            ${isActive ? styles.active : ""}
                            ${isActive02 ? styles.active02 : ""}
                        `}
                ></div>
            </div>
        </div>
    );
}
