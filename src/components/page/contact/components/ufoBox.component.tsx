import styles from "./ufoBox.module.scss"
import { useEffect, useState } from "react";

interface UfoboxProps {
    onSelect: (text: string) => void;
}

export default function Ufobox({ onSelect }: UfoboxProps) {
    const [isActive, setIsActive] = useState(false);
    const [isActive02, setIsActive02] = useState(false);

    useEffect(() => {
        setIsActive(true);
        const timer = setTimeout(() => setIsActive02(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const keywords = ["안녕", "자기소개", "연락처", "포부", "적성"];

    return (
        <div className={`${styles.ufo_box} ${isActive ? styles.active : ""}`}>
            <div className={styles.ufo_head}></div>
            <div className={`${styles.ufo_body_box} ${isActive02 ? styles.active : ""}`}>
                <div className={styles.ufo_body}></div>
                <div className={styles.txt_box}>
                    <ul>
                        {keywords.map((word, idx) => (
                            <li key={idx} onClick={() => onSelect(word)}>
                                {word}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
