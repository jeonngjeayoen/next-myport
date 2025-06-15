import { useState, useEffect, useRef } from "react";

export default function useTransitionStage(initialIndex: number) {
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);
    const [isActive, setIsActive] = useState(false);     // width
    const [isActive02, setIsActive02] = useState(false); // height
    const [direction, setDirection] = useState<"in" | "out" | null>(null);
    const screenRef = useRef<HTMLDivElement>(null);
    const pendingIndexRef = useRef<number>(initialIndex);

    // 진입/퇴장 애니메이션 관리
    useEffect(() => {
        const el = screenRef.current;
        if (!el) return;

        let stage = 0;

        const handleTransition = (e: TransitionEvent) => {
            if (e.propertyName !== "width" && e.propertyName !== "height") return;
            stage++;

            if (direction === "in") {
                if (stage === 1) setIsActive02(true);
            } else if (direction === "out") {
                if (stage === 1) {
                    setIsActive(false);
                } else if (stage === 2) {
                    el.removeEventListener("transitionend", handleTransition);
                    setSelectedIndex(pendingIndexRef.current);
                    setDirection("in");
                    setTimeout(() => setIsActive(true), 30);
                }
            }
        };

        el.addEventListener("transitionend", handleTransition);
        return () => el.removeEventListener("transitionend", handleTransition);
    }, [direction]);

    // 초기 시작
    useEffect(() => {
        setDirection("in");
        setIsActive(true);
    }, []);

    // 탭 클릭 처리
    const handleTabChange = (index: number) => {
        if (index === selectedIndex) return;
        setDirection("out");
        pendingIndexRef.current = index;
        setIsActive02(false);
    };

    return {
        selectedIndex,
        isActive,
        isActive02,
        screenRef,
        handleTabChange,
    };
}
