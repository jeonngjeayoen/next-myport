import styles from "./rotateBox.module.scss";
import Link from "next/link";

type RotateBoxProps = {
    title: string;
    subtitle: string;
    detail: string[];
    link: string;
    linkLabel?: string;
    classnum: string;
};

export default function RotateBox({ title, subtitle, detail, link, linkLabel = "바로가기", classnum }: RotateBoxProps) {
    return (
        <div className={styles.rotate_box_wrap}>
            <div className={styles.rotate_box}>
                <div className={styles.card_box}>
                    <div className={styles[`card${classnum}`]}></div>
                </div>
                <div className={styles.back}>
                    {detail.map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                    <div className={styles.btn_box}>
                        <ul>
                            <li><Link href={link}>{linkLabel}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>{title}</p>
            <br />
            <p>{subtitle}</p>
        </div>
    );
}
