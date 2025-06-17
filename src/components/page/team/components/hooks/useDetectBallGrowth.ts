import { useEffect } from "react";

export const useDetectBallGrowth = (
    activeBallTitle: string | null,
    getBallElementByTitle: (title: string) => HTMLDivElement | null,
    onFullyGrown: () => void,
    activeClass: string = "active",
    targetSize: number = 2000
) => {
    useEffect(() => {
        if (!activeBallTitle) return;

        const ball = getBallElementByTitle(activeBallTitle);
        if (!ball) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            if (
                ball.classList.contains(activeClass) &&
                width >= targetSize &&
                height >= targetSize
            ) {
                document.body.style.overflow = "hidden";
                const mainEl = document.querySelector("main");
                if (mainEl) {
                    mainEl.style.overflow = "hidden";
                }
                onFullyGrown();
            }
        });

        observer.observe(ball);

        return () => {
            observer.disconnect();
            const mainEl = document.querySelector("main");
            document.body.style.overflow = "";
            if (mainEl) {
                mainEl.style.overflow = "";
            }
        };
    }, [activeBallTitle, getBallElementByTitle, onFullyGrown, activeClass, targetSize]);
};

