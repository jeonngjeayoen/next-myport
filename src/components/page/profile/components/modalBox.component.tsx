import { useRef } from "react";
import styles from "./modalBox.module.scss";
import { useAnimateOnClass } from "./hooks/useAnimateOnClass";
import Image from 'next/image';
interface ModalBoxProps {
    selectedTitle: string | null;
}

export default function ModalBox({ selectedTitle }: ModalBoxProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLElement | null>(null);

    useAnimateOnClass(wrapperRef, modalRef, "ballAnimate02", styles.active, 100);

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
                            <li>
                                <div className={styles.img01_box}>
                                    <Image
                                        src="/images/sass.png"
                                        alt="sass"
                                        fill
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={styles.img02_box}>
                                    <Image
                                        src="/images/typescript.png"
                                        alt="typescript"
                                        fill
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={styles.img03_box}>
                                    <Image
                                        src="/images/nodejs.png"
                                        alt="nodejs"
                                        fill
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={styles.img04_box}>
                                    <Image
                                        src="/images/nextjs.png"
                                        alt="nextjs"
                                        fill
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={styles.img05_box}>
                                    <Image
                                        src="/images/vercel.png"
                                        alt="vercel"
                                        fill
                                    />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.second_figma}>
                        <div className={styles.second_figma_box}>
                            <Image
                                src="/images/user_flow.png"
                                alt="user_flow"
                                fill
                            />
                        </div>
                        <div className={styles.last_figma_box}>
                            <Image
                                src="/images/main_figam.jpg"
                                alt="main_figam"
                                fill
                            />
                        </div>
                    </li>
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
