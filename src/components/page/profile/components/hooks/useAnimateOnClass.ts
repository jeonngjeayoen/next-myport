import { useEffect, useRef } from "react";

export const useAnimateOnClass = (
    wrapperRef: React.RefObject<HTMLElement | null>,
    targetRef: React.RefObject<HTMLElement | null>,
    triggerClass: string,
    animateClass: string,
    delay: number
) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const wrapperEl = wrapperRef.current;
        const targetEl = targetRef.current;
        const footerEl = document.querySelector("footer") as HTMLElement | null;

        if (!wrapperEl || !targetEl) return;

        const isSmallScreen = window.innerWidth <= 500;

        const initialHasTrigger = wrapperEl.classList.contains(triggerClass) ||
            Array.from(wrapperEl.classList).some((cls) => cls.includes(triggerClass));

        if (initialHasTrigger) {
            timerRef.current = setTimeout(() => {
                if (footerEl && isSmallScreen) footerEl.style.display = "none";
                targetEl.classList.add(animateClass);
            }, delay);
        }

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    const classList = (mutation.target as HTMLElement).classList;
                    const hasTrigger = Array.from(classList).some((cls) =>
                        cls.includes(triggerClass)
                    );

                    if (hasTrigger) {
                        if (timerRef.current) clearTimeout(timerRef.current);
                        timerRef.current = setTimeout(() => {
                            if (footerEl && isSmallScreen) footerEl.style.display = "none";
                            targetEl.classList.add(animateClass);
                        }, delay);
                    } else {
                        if (timerRef.current) clearTimeout(timerRef.current);
                        if (footerEl && isSmallScreen) footerEl.style.display = "";
                        targetEl.classList.remove(animateClass);
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
            if (footerEl && isSmallScreen) footerEl.style.display = "";
            targetEl.classList.remove(animateClass);
        };
    }, [wrapperRef, targetRef, triggerClass, animateClass, delay]);
};
