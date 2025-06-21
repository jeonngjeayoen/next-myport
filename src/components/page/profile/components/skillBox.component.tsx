import { useState, useMemo } from "react";
import styles from "./skillBox.module.scss";

const skills = [
    { name: "UI/UX", level: 80 },
    { name: "웹표준/접근성", level: 80 },
    { name: "HTML5", level: 85 },
    { name: "CSS3", level: 100 },
    { name: "SCSS", level: 90 },
    { name: "JAVASCRIPT", level: 75 },
    { name: "TYPESCRIPT", level: 70 },
    { name: "REACT/NEXT.JS", level: 70 },
    { name: "NODE.JS", level: 50 },
    { name: "PHP", level: 70 },
    { name: "GIT", level: 85 },
    { name: "불타는 열정", level: 100 },
];

export default function Skillbox() {
    const [isHovered, setIsHovered] = useState(false);
    const particles = useMemo(() => Array.from({ length: 50 }), []);

    return (
        <>
            <div className={styles.h3_box}>
                <h3 className={styles.skill_lab_h3}>SKILL</h3>
                <span className={`${styles.h3_mouse} ${isHovered ? styles.active : ''}`}></span>
                <p>hover!</p>
            </div>
            <ul
                className={styles.skill_lab}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {skills.map((skill) => (
                    <li key={skill.name}>
                        <div className={styles.bar_bg}>
                            <h4>{skill.name}</h4>
                            <div className={styles.bar}>
                                <span>{skill.level}%</span>
                            </div>
                        </div>
                        {skill.name === "불타는 열정" && (
                            <div className={isHovered ? styles.fire : ''}>
                                {particles.map((_, i) => (
                                    <div
                                        key={i}
                                        className={isHovered ? styles.particle : ''}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
