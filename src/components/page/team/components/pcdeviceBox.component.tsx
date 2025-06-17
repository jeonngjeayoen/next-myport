"use client";

import styles from "./pcdeviceBox.module.scss";
import Link from "next/link";
import useTransitionStage from "./hooks/useTransitionStage";

const tabData = [
    {
        label: "TECH BLOG",
        screenClass: "screen01",
        title: "LLM 기반의 기술 블로그",
        description: [
            "글쓰기/수정 및 북마크 기능 개발",
            "기여도 : 65%",
            "역할 : 프론트엔드 개발자",
            "제작기간 : 1.5개월",
        ],
        links: [
            { label: "신규 사이트", url: "https://www.threed.site/" },
        ],
    },
    {
        label: "LMS",
        screenClass: "screen02",
        title: "LMS 관리자 / 사용자 대시보드",
        description: [
            "명지대학교 LMS 사이트 리디자인",
            "기여도 : 70%",
            "역할 : 프론트엔드 개발",
            "제작기간 : 1달",
        ],
        links: [
            { label: "기존 사이트", url: "https://lms.mju.ac.kr/" },
            { label: "리뉴얼 사이트", url: "https://jjy981212.dothome.co.kr/lms/module/login.php" },
        ],
    },
    {
        label: "EMART",
        screenClass: "screen03",
        title: "이마트 적응형 웹사이트 제작",
        description: [
            "php와 적응형으로 새롭게 구현한",
            "기여도 : 75%",
            "역할 : 기획",
            "제작기간 : 3주",
        ],
        links: [
            { label: "기존 사이트", url: "https://company.emart.com/ko/main.do" },
            { label: "리뉴얼 사이트", url: "https://jjy981212.dothome.co.kr/emart/index.html" },
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
            { label: "기존 사이트", url: "https://www.sidmool.com/" },
            { label: "리뉴얼 사이트", url: "https://jjy981212.dothome.co.kr/sidmool/index.html" },
        ],
    },
];
export default function PcBox() {
    const {
        selectedIndex,
        immediateTabIndex,
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
                        <li
                            key={i}
                            className={i === immediateTabIndex ? styles.active : ""}
                            onClick={() => handleTabChange(i)}
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
