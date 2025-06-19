"use client";

import styles from "./pcdeviceBox.module.scss";
import Link from "next/link";
import useTransitionStage from "./hooks/useTransitionStage";
import { tabData } from "./data/tabData";

interface PcBoxProps {
    index: number;
    onTabChange: (index: number) => void;
    onScreenClick: () => void;
}
export default function PcBox({ index, onTabChange, onScreenClick }: PcBoxProps) {
    const {
        selectedIndex,
        immediateTabIndex,
        isActive,
        isActive02,
        screenRef,
        handleTabChange,
    } = useTransitionStage(index);

    const currentTab = tabData[selectedIndex];

    const handleClick = (i: number) => {
        onTabChange(i);     // 부모에게 전달 (모바일 동기화용)
        handleTabChange(i); // 내부 전환
    };

    return (
        <div className={styles.container}>
            <div className={styles.tab_box}>
                <ul>
                    {tabData.map((tab, i) => (
                        <li
                            key={i}
                            className={i === immediateTabIndex ? styles.active : ""}
                            onClick={() => handleClick(i)}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.pc_box}>
                <div className={styles.img_box}>
                    <div
                        ref={screenRef}
                        className={`
                            ${styles.screen}
                            ${styles[currentTab.screenClass]}
                            ${isActive ? styles.active : ""}
                            ${isActive02 ? styles.active02 : ""}
                            `}
                        onClick={onScreenClick}
                    ></div>
                </div>
            </div>

            <div className={`${styles.text_box} ${styles[currentTab.screenClass]}`}>
                <div className={`${styles.left_box} ${isActive ? styles.active : ""}`} >
                    <h2>{currentTab.title}</h2>
                    <ul>{currentTab.description.map((text, i) => <li key={i}>{text}</li>)}</ul>
                </div>
                <div className={`${styles.right_box} ${isActive ? styles.active : ""}`}>
                    <ul>{currentTab.links.map((link, i) => <li key={i}><Link href={link.url}>{link.label}</Link></li>)}</ul>
                </div>
            </div>
        </div>
    );
}
