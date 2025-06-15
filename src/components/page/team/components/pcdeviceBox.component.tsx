"use client";

import styles from "./pcdeviceBox.module.scss";
import Link from "next/link";
import useTransitionStage from "./hooks/useTransitionStage";

const tabData = [
    {
        label: "LLM",
        screenClass: "screen01",
        title: "LLM 프로젝트",
        description: [
            "대규모 언어 모델 인터페이스 제작",
            "기여도 : 90%",
            "역할 : 프론트엔드 개발자",
            "제작기간 : 2개월",
        ],
        links: [
            { label: "신규 사이트", url: "#" },
        ],
    },
    {
        label: "LMS",
        screenClass: "screen02",
        title: "LMS 관리자 대시보드",
        description: [
            "교육관리 백오피스 리디자인",
            "기여도 : 80%",
            "역할 : 퍼블리셔",
            "제작기간 : 3주",
        ],
        links: [
            { label: "기존 사이트", url: "#" },
            { label: "리뉴얼 사이트", url: "#" },
        ],
    },
    {
        label: "EMART",
        screenClass: "screen03",
        title: "이마트 기획전 퍼블리싱",
        description: [
            "연간 100건 이상 기획전 작업",
            "기여도 : 60%",
            "역할 : 퍼블리셔",
            "제작기간 : 상시",
        ],
        links: [
            { label: "기존 사이트", url: "#" },
            { label: "리뉴얼 사이트", url: "#" },
        ],
    },
    {
        label: "SIDMOOL",
        screenClass: "screen04",
        title: "시드물 반응형 웹사이트 제작",
        description: [
            "세련된 디자인으로 재탄생한 시드물",
            "기여도 : 70%",
            "역할 : 조장",
            "제작기간 : 한달",
        ],
        links: [
            { label: "기존 사이트", url: "#" },
            { label: "리뉴얼 사이트", url: "#" },
        ],
    },
];
export default function PcBox() {
    const {
        selectedIndex,
        isActive,
        isActive02,
        screenRef,
        handleTabChange,
    } = useTransitionStage(3);

    const currentTab = tabData[selectedIndex];

    return (
        <div className={styles.container}>
            <div className={styles.tab_box}>
                <ul>
                    {tabData.map((tab, i) => (
                        <li key={i} className={i === selectedIndex ? styles.active : ""} onClick={() => handleTabChange(i)}>
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
                    ></div>
                </div>
            </div>

            <div className={styles.text_box}>
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
