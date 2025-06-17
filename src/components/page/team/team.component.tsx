"use client";

import styles from "./team.module.scss";
import TinkleBack from "../../semantic/back/tinkleBack.component";
import PcBox from "./components/pcdeviceBox.component";
import MoBox from "./components/mobileBox.component";
import Teamback from "./components/teamBack.component";
import Modal from "./components/modalBox.component";
import { tabData } from "./data/tabData";
import { useEffect, useState, useRef } from "react";
import { useDetectBallGrowth } from "./components/hooks/useDetectBallGrowth";

export default function Team() {
    const [index, setIndex] = useState(3);
    const [isActive, setIsActive] = useState(false);
    const [activeBallTitle, setActiveBallTitle] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const currentTab = tabData[index];

    const ballRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // 화면 활성화
    useEffect(() => {
        setIsActive(true);
    }, []);

    // 화면 클릭 시 활성화될 ball title 저장
    const handleScreenClick = () => {
        setModalVisible(false); // 이전 모달 숨김
        setActiveBallTitle(currentTab.title);
    };

    // 커지는 ball 감지 훅
    useDetectBallGrowth(
        activeBallTitle,
        (title) => ballRefs.current[title] ?? null,
        () => setModalVisible(true),
        styles.active // active 클래스명 전달
    );


    return (
        <main className={styles.team_wrap}>
            <section className={styles.section01}>
                <PcBox
                    index={index}
                    onTabChange={setIndex}
                    onScreenClick={handleScreenClick}
                />
                <MoBox index={index} />
            </section>

            <div className={styles.back_illu}>
                <div className={`${styles.illu} ${isActive ? styles.active : ""}`} />
            </div>

            <TinkleBack />
            <Teamback />

            {tabData.map((tab) => (
                <div
                    key={tab.title}
                    ref={(el) => {
                        ballRefs.current[tab.title] = el;
                    }}
                    className={`
                        ${styles.commonBall}
                        ${styles[tab.screenClass]}
                        ${activeBallTitle === tab.title ? styles.active : ""}
                    `}
                />
            ))}

            {modalVisible && (
                <Modal
                    selectedTitle={currentTab.screenClass}
                    onClose={() => {
                        setActiveBallTitle(null);
                        setModalVisible(false);
                    }}
                />
            )}
        </main>
    );
}
