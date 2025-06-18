import { useRef } from "react";
import styles from "./modalBox.module.scss";

interface ModalBoxProps {
    selectedTitle: string | null;
    onClose: () => void;
}

export default function ModalBox({ selectedTitle, onClose }: ModalBoxProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLElement | null>(null);

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
                    <li className={styles.screen01}></li>
                </ul>
            )}

            {selectedTitle === "screen02" && (
                <ul className={styles.modal_box02}>
                    <li className={styles.screen02}>
                    </li>
                </ul>
            )}

            {selectedTitle === "screen03" && (
                <ul className={styles.modal_box03}>
                    <li className={styles.screen03}>
                    </li>
                </ul>
            )}

            {selectedTitle === "screen04" && (
                <ul className={styles.modal_box04}>
                    <li className={styles.screen04}></li>
                </ul>
            )}
        </div>
    );
}
