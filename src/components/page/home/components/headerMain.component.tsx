"use client";

import styles from "./headerMain.module.scss";
import { useBallNavigation } from "./hooks/useNavigation";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HomeHeader() {
    const { ballsRef, iconsRef, animate } = useBallNavigation();
    const navRef = useRef<HTMLUListElement>(null);

    const menuLabels = ["profile", "single", "team", "contact"];
    const planetClassList = ["earth", "mars", "jupiter", "Neptune"];

    useLayoutEffect(() => {
        if (!navRef.current) return;

        const liElements = navRef.current.querySelectorAll("li");

        gsap.fromTo(liElements,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, zIndex: 1 }
        );
    }, []);

    return (
        <>
            {[0, 1, 2, 3].map((i) => (
                <span
                    key={i}
                    className={`${styles.ball} ${styles['ball' + (i + 1)]}`}
                    ref={(el) => {
                        if (el) ballsRef.current[i] = el;
                    }}
                ></span>
            ))}
            <header className={styles.homeheader}>
                <nav>
                    <ul ref={navRef}>
                        {[0, 1, 2, 3].map((i) => (
                            <li key={i + 1} onClick={() => animate(i + 1)}>
                                <Link href="#">
                                    <span
                                        className={`${styles.icon} ${styles[planetClassList[i]]}`}
                                        ref={(el) => {
                                            if (el) iconsRef.current[i] = el;
                                        }}
                                    >
                                        <i className={styles.onicon}></i>
                                    </span>
                                    <span>{menuLabels[i]}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}
