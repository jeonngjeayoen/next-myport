import { useEffect } from "react";

export const useDetectBallGrowth = (
    activeBallTitle: string | null,
    getBallElementByTitle: (title: string) => HTMLDivElement | null,
    onFullyGrown: () => void,
    activeClass: string = "active"
) => {
    useEffect(() => {
        if (!activeBallTitle) return;

        const ball = getBallElementByTitle(activeBallTitle);
        if (!ball || !ball.classList.contains(activeClass)) return;

        const mainEl = document.querySelector("main");

        const handleTransitionEnd = (e: TransitionEvent) => {
            if (!["width", "height", "transform"].includes(e.propertyName)) return;

            // body 스크롤 막기
            document.body.style.overflow = "hidden";
            if (mainEl) mainEl.style.overflow = "hidden";

            onFullyGrown();

            ball.removeEventListener("transitionend", handleTransitionEnd);
        };

        ball.addEventListener("transitionend", handleTransitionEnd);

        return () => {
            ball.removeEventListener("transitionend", handleTransitionEnd);
            document.body.style.overflow = "";
            if (mainEl) mainEl.style.overflow = "";
        };
    }, [activeBallTitle, getBallElementByTitle, onFullyGrown, activeClass]);
};
