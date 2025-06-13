import { useState, useRef } from "react";
import styles from "./designBox.module.scss";
import Modal from "./modalBox.component";
import { useDesignBallAnimation } from "./hooks/useBallAnimation";

const designItems = [
    { title: "FIGMA", ballClass: "e_ball1" },
    { title: "PHOTOSHOP", ballClass: "e_ball2" },
    { title: "XD", ballClass: "e_ball3" },
    { title: "ILLUSTRATION", ballClass: "e_ball4" },
];

export default function DesignBox() {
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const { animate } = useDesignBallAnimation();


    const ballRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const modalBoxRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (title: string) => {
        const ballElement = ballRefs.current[title];
        const modalBox = modalBoxRef.current;
        if (!ballElement || !modalBox) return;
        setSelectedTitle(title); // 먼저 설정
        animate(ballElement, modalBox, () => {
            setSelectedTitle(title);
        });
    };

    return (
        <div className={styles.design_box}>
            <ul className={styles.design_list}>
                {designItems.map((item) => (
                    <li key={item.title} onClick={() => handleClick(item.title)}>
                        <h3>{item.title}</h3>
                        <div className={styles.img_box}>
                            <div className={styles.real_img}></div>
                            <span className={styles.img_line01}></span>
                            <span className={styles.img_line02}></span>
                            <span className={styles.img_line03}></span>
                            <span className={styles.img_line04}></span>
                        </div>
                        <div
                            ref={(el) => {
                                ballRefs.current[item.title] = el;
                            }}
                            className={`${styles.commonBall} ${styles[item.ballClass]}`}
                        />
                    </li>
                ))}
            </ul>

            <div className={styles.modal_box_wrap} ref={modalBoxRef}>
                <Modal selectedTitle={selectedTitle} />
            </div>
        </div>
    );
}
