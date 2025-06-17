import { useEffect, useRef } from "react";

export const useAnimateOnClass = (
    wrapperRef: React.RefObject<HTMLElement | null>,
    targetRef: React.RefObject<HTMLElement | null>,
    triggerClass: string,
    animateClass: string,
    delay: number = 0
) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const wrapperEl = wrapperRef.current;
        const targetEl = targetRef.current;
        const footerEl = document.querySelector("footer") as HTMLElement | null;

        if (!wrapperEl || !targetEl) return;

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    const classList = (mutation.target as HTMLElement).classList;
                    const hasTrigger = Array.from(classList).some((cls) =>
                        cls.includes(triggerClass)
                    );

                    const isSmallScreen = window.innerWidth <= 500;

                    if (hasTrigger) {
                        if (timerRef.current) clearTimeout(timerRef.current);
                        timerRef.current = setTimeout(() => {
                            targetEl.classList.add(animateClass);
                            if (footerEl && isSmallScreen) footerEl.style.display = "none"; // ✅ 해상도 조건 추가
                        }, delay);
                    } else {
                        if (timerRef.current) clearTimeout(timerRef.current);
                        targetEl.classList.remove(animateClass);
                        if (footerEl && isSmallScreen) footerEl.style.display = ""; // ✅ 해상도 조건 추가
                    }
                }
            }
        });

        observer.observe(wrapperEl, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            observer.disconnect();
            if (timerRef.current) clearTimeout(timerRef.current);
            targetEl.classList.remove(animateClass);
            if (footerEl && window.innerWidth <= 500) footerEl.style.display = ""; // ✅ cleanup에도 조건 추가
        };
    }, [wrapperRef, targetRef, triggerClass, animateClass, delay]);
};
