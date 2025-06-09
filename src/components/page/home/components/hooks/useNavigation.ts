"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "../headerMain.module.scss";

export const useBallNavigation = () => {
    const ballsRef = useRef<HTMLSpanElement[]>([]);
    const iconsRef = useRef<HTMLSpanElement[]>([]);
    const router = useRouter();

    const planetClassList = ["profile", "single", "team", "contact"];

    const animate = (index: number) => {
        const ball = ballsRef.current[index - 1];
        const planetClass = planetClassList[index - 1];
        if (!ball) return;

        let stage = 0;

        const handleTransition = (e: TransitionEvent) => {
            if (e.propertyName !== "top" && e.propertyName !== "left" && e.propertyName !== "width") return;

            stage += 1;

            if (stage === 1) {
                // Y축 이동이 끝나면 → X축 이동
                ball.classList.add(styles.ballAnimate02);
            } else if (stage === 2) {
                // X축 이동 끝나면 → 확대
                ball.classList.add(styles.ballAnimate03);
            } else if (stage === 3) {
                ball.removeEventListener("transitionend", handleTransition);
                const url = `/${planetClass}`;
                setTimeout(() => {
                    if (index === 4) window.location.href = url;
                    else router.push(url);
                }, 500);
            }
        };

        ball.addEventListener("transitionend", handleTransition);
        ball.classList.add(styles.ballAnimate01); // 최초 위로 이동
    };

    return { ballsRef, iconsRef, animate };
};
