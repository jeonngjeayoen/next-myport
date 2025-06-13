"use client";

import styles from "./profile.module.scss"
import { useEffect, useState } from "react";
import Skillbox from "./components/skillBox.component"
import DejignBox from "./components/designBox.component"

export default function Profile() {
    const names = ["정재연", "Jung Jea Yeon", "JeaYeon", "鄭在硯"];
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % names.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [names.length]);

    return (
        <main className={styles.profile_wrap}>
            <section className={styles.section01}>
                <ul className={styles.list}>
                    <li className={styles.photo_box}>
                        <span className={styles.photo}></span>
                    </li>
                    <li className={styles.licen}>
                        <h3>LISENCE</h3>
                        <p>GTQ 1급 <span>22.07</span></p>
                        <p>운전면허 2종 보통 <span>21.02</span></p>
                    </li>
                    <li className={styles.licen02}>
                        <h3>EDUCATON</h3>
                        <div className={styles.edue_title}>
                            <p>서울시 매력 일자리</p>
                            <p>모던 웹 풀스택 실무 과정<span>25.04.20 ~ 25.07.01</span></p>
                        </div>
                        <div className={styles.edue_title}>
                            <p>그린컴퓨터아트학원</p>
                            <p>웹 퍼블/프론트 양성 과정<span>22.11.29 ~ 23.05.23</span></p>
                        </div>
                        <div className={styles.edue_title}>
                            <p>대우직업능력개발원</p>
                            <p>반응형 웹 디자인 양성<span>21.05.25 ~ 21.10.07</span></p>
                        </div>
                    </li>
                </ul>
                <ul className={styles.list02}>
                    <li className={styles.address}>
                        <ul className={styles.name_box}>
                            {names.map((name, idx) => (
                                <li
                                    key={idx}
                                    className={`${activeIdx === idx ? styles.on : styles.off}`}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                        <ul className={styles.address_box}>
                            <li>Namyangju-si, Gyeonggi-do</li>
                            <li>Dasan.176.10-27</li>
                            <li>1998년 12월 12일</li>
                        </ul>
                    </li>
                    <li className={styles.skills}>
                        <Skillbox />
                    </li>
                </ul>
            </section>
            <section className={styles.section02}>
                <h3 className={styles.section02_h3}>DESIGN TOOL</h3>
                <DejignBox />
            </section>
        </main>
    )
}