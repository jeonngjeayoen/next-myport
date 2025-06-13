import { useRef } from "react";
import styles from "./modalBox.module.scss";
import { useAnimateOnClass } from "./hooks/useAnimateOnClass";
interface ModalBoxProps {
    selectedTitle: string | null;
}

export default function ModalBox({ selectedTitle }: ModalBoxProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLElement | null>(null);

    useAnimateOnClass(wrapperRef, modalRef, "ballAnimate02", styles.active, 0);

    return (
        <div ref={(el) => {
            modalRef.current = el;
            wrapperRef.current = el?.parentElement ?? null;
        }} className={styles.modal_box}>
            <div className={styles.delet_btn}></div>
            {selectedTitle === "FIGMA" && (
                <ul className={styles.modal_box01}>
                    <li className={styles.first_figma}>
                        <ul>
                            <li className={styles.img01}></li>
                            <li className={styles.img02}></li>
                            <li className={styles.img03}></li>
                            <li className={styles.img04}></li>
                            <li className={styles.img05}></li>
                        </ul>
                    </li>
                    <li className={styles.second_figma}></li>
                    <li className={styles.last_figma}></li>
                </ul>
            )}
            {selectedTitle === "PHOTOSHOP" && (
                <ul className={styles.modal_box02}>
                    <li className={styles.first_photo}>
                        <ul>
                            <li className={styles.img01}></li>
                            <li className={styles.img02}></li>
                            <li className={styles.img03}></li>
                        </ul>
                    </li>
                </ul>
            )}
            {selectedTitle === "XD" && (
                <ul className={styles.modal_box03}>
                    <li className={styles.first_photo}>
                        <ul>
                            <li className={styles.img01}></li>
                            <li className={styles.img02}></li>
                            <li className={styles.img03}></li>
                        </ul>
                    </li>
                </ul>
            )}
            {selectedTitle === "ILLUSTRATION" && (
                <ul className={styles.modal_box04}>
                    <li className={styles.ilue}></li>
                </ul>
            )}
        </div>
    );
}
