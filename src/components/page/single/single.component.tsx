"use client";

import { useEffect, useState } from "react";
import styles from "./single.module.scss";
import TinkleBack from "../../semantic/back/tinkleBack.component";
import Rocket from "./components/rocketBox.component"
import RotateBox from "./components/rotateBox.component"
import { useStaggeredActivation } from "./components/hooks/useStaggeredActivation";

const rotateBoxData = [
    {
        title: "최현주 영상의학과",
        subtitle: "적응형 홈페이지 신규 구축",
        detail: ["기여도 : 80%", "작업시간 : 한달", "php 기반 프론트엔드 / api연동"],
        link: "http://www.drbreast.co.kr/",
        classnum: "01"
    },
    {
        title: "웰 그래피 자사몰",
        subtitle: "반응형 웹사이트 리뉴얼",
        detail: ["기여도 : 70%", "작업시간 : 3주", "아임웹 기반 퍼블리싱 / 기획"],
        link: "https://wellgraphy.com/",
        classnum: "02"
    },
    {
        title: "무니버니 쇼핑몰",
        subtitle: "반응형 쇼핑몰 신규 구축",
        detail: ["기여도 : 75%", "작업시간 : 3주", "카페24 기반 퍼블리싱 / 프론트 스킨 작업"],
        link: "https://moonybunny.com/index.html",
        classnum: "03"
    },
    {
        title: "해피레포트",
        subtitle: "전체 프론트엔드 리뉴얼 + UI 개편",
        detail: ["기여도 : 85%", "작업시간 : 1.5달", "HTML/CSS + javascript/ASP"],
        link: "https://www.happyreport.co.kr/",
        classnum: "04"
    }
];

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
