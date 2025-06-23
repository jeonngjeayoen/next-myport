"use client";

import styles from "./tinkleBack.module.scss";

export default function HomeComponent() {

    const starIcons = Array.from({ length: 7 }, (_, i) => `ico_star${i + 1}`);
    return (
        <div>
            {starIcons.map((cls, idx) => (
                <div className={`${styles.ico_star} ${styles[cls]}`} key={`ico-star-${idx}`}></div>
            ))}
        </div>
    )
};


