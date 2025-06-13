import styles from "../designBox.module.scss";

export const useDesignBallAnimation = () => {

    const animate = (
        ball: HTMLDivElement,
        modalBox: HTMLDivElement,
        onFinish: () => void
    ) => {
        if (!ball || !modalBox) return;

        document.body.style.overflow = "hidden";
        const mainEl = document.querySelector("main") as HTMLElement;
        const isSmallScreen = window.innerWidth <= 1400;
        // ✅ 모달 클릭 시 애니메이션 초기화
        const handleModalClick = () => {
            document.body.style.overflow = "";
            ball.classList.remove(styles.ballAnimate01);
            modalBox.classList.remove(styles.ballAnimate02);
            modalBox.removeEventListener("click", handleModalClick);
            if (mainEl && isSmallScreen) mainEl.style.overflow = "";
            onFinish();
        };

        modalBox.addEventListener("click", handleModalClick);

        // ✅ 애니메이션 순차 처리
        const handleTransition = (e: TransitionEvent) => {
            if (!["top", "left", "width"].includes(e.propertyName)) return;

            modalBox.classList.add(styles.ballAnimate02);
            if (mainEl && isSmallScreen) mainEl.style.overflow = "hidden";

            ball.removeEventListener("transitionend", handleTransition);
        };

        ball.addEventListener("transitionend", handleTransition);
        ball.classList.add(styles.ballAnimate01);
    };

    return { animate };
};
