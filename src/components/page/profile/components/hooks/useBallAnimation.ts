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
        const isVerySmallScreen = window.innerWidth <= 450;
        document.body.style.overflow = "hidden";

        // ✅ 450px 이하에서만 스크롤 잠금
        if (isVerySmallScreen) {
            scrollY = window.scrollY || window.pageYOffset;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
        }

        // ✅ 모달 클릭 시 애니메이션 및 스크롤 복원
        const handleModalClick = () => {
            document.body.style.overflow = "";
            ball.classList.remove(styles.ballAnimate01);
            modalBox.classList.remove(styles.ballAnimate02);
            modalBox.removeEventListener("click", handleModalClick);

            const handleBallShrinkEnd = (e: TransitionEvent) => {
                if (!["top", "left", "width"].includes(e.propertyName)) return;

                // ✅ 450px 이하에서만 스크롤 복원
                if (isVerySmallScreen) {
                    document.body.style.position = "";
                    document.body.style.top = "";
                    document.body.style.left = "";
                    document.body.style.right = "";
                    window.scrollTo(0, scrollY);
                }

                if (mainEl && isSmallScreen) {
                    mainEl.style.overflow = "";
                }

                ball.removeEventListener("transitionend", handleBallShrinkEnd);
                onFinish();
            };

            ball.addEventListener("transitionend", handleBallShrinkEnd);
        };

        modalBox.addEventListener("click", handleModalClick);

        // ✅ 모달 등장 애니메이션 트리거
        const handleTransition = (e: TransitionEvent) => {
            if (!["top", "left", "width"].includes(e.propertyName)) return;
            modalBox.classList.add(styles.ballAnimate02);
            ball.removeEventListener("transitionend", handleTransition);

            if (mainEl && isSmallScreen) {
                mainEl.style.overflow = "hidden";
            }
        };

        ball.addEventListener("transitionend", handleTransition);
        ball.classList.add(styles.ballAnimate01);
    };

    return { animate };
};
