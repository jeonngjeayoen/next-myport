import styles from "../designBox.module.scss";

export const useDesignBallAnimation = () => {
    let scrollY = 0;

    const animate = (
        ball: HTMLDivElement,
        modalBox: HTMLDivElement,
        onFinish: () => void
    ) => {
        if (!ball || !modalBox) return;

        const mainEl = document.querySelector("main") as HTMLElement;
        const isSmallScreen = window.innerWidth <= 1400;

        // ✅ 스크롤 잠금
        scrollY = window.scrollY || window.pageYOffset;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";

        // ✅ 닫기 처리: 애니메이션 트리거 → transitionend 이후 해제
        const handleModalClick = () => {
            // 모달 클래스 제거 (닫힘 애니메이션 시작)
            ball.classList.remove(styles.ballAnimate01);
            modalBox.classList.remove(styles.ballAnimate02);
            modalBox.removeEventListener("click", handleModalClick);
            // 닫히는 애니메이션 감지
            const handleBallShrinkEnd = (e: TransitionEvent) => {
                if (!["top", "left", "width"].includes(e.propertyName)) return;

                // ✅ 스크롤 잠금 해제
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                if (mainEl && isSmallScreen) mainEl.style.overflow = "";

                window.scrollTo(0, scrollY); // 원래 위치 복귀

                ball.removeEventListener("transitionend", handleBallShrinkEnd);
                onFinish();
            };

            ball.addEventListener("transitionend", handleBallShrinkEnd);
        };

        modalBox.addEventListener("click", handleModalClick);

        const handleTransition = (e: TransitionEvent) => {
            if (!["top", "left", "width"].includes(e.propertyName)) return;

            modalBox.classList.add(styles.ballAnimate02);
            ball.removeEventListener("transitionend", handleTransition);
            if (mainEl && isSmallScreen) mainEl.style.overflow = "hidden";
        };

        ball.addEventListener("transitionend", handleTransition);
        ball.classList.add(styles.ballAnimate01);
    };

    return { animate };
};
