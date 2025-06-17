import { useRef } from "react";
import styles from "./modalBox.module.scss";

interface ModalBoxProps {
    selectedTitle: string | null;
    onClose: () => void;
}

export default function ModalBox({ selectedTitle, onClose }: ModalBoxProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLElement | null>(null);

    // ✅ 모달 박스 클릭 시 닫기 동작
    const handleClose = () => {
        onClose();
    };

    return (
        <div
            ref={(el) => {
                modalRef.current = el;
                wrapperRef.current = el?.parentElement ?? null;
            }}
            className={styles.modal_box}
            onClick={handleClose}
        >
            <div className={styles.delet_btn}></div>

            {selectedTitle === "screen01" && (
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

            {selectedTitle === "screen02" && (
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

            {selectedTitle === "screen03" && (
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

            {selectedTitle === "screen04" && (
                <ul className={styles.modal_box04}>
                    <li className={styles.ilue}></li>
                </ul>
            )}
        </div>
    );
}
