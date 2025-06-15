import styles from "./rocketBox.module.scss";
import { useMemo, useEffect, useState } from "react";

export default function Rocket() {
    const particles = useMemo(() => Array.from({ length: 50 }), []);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);
    return (
        <div className={`${styles.rocket_box} ${isActive ? styles.active : ""}`}>
            <div className={styles.rocket}></div>
            <div className={styles.fire}>
                {particles.map((_, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                    ></div>
                ))}
            </div>
        </div>
    );
}
