import styles from "./designBox.module.scss";

const designItems = [
    { title: "FIGMA", ballClass: "e_ball1" },
    { title: "PHOTOSHOP", ballClass: "e_ball2" },
    { title: "XD", ballClass: "e_ball3" },
    { title: "ILLUSTRATION", ballClass: "e_ball4" },
];

export default function DesignBox() {
    return (
        <div className={styles.design_box}>
            <ul className={styles.design_list}>
                {designItems.map((item) => (
                    <li key={item.title}>
                        <div>
                            <h3>{item.title}</h3>
                            <div className={styles.img_box}>
                                <span className={styles.img_line01}></span>
                                <span className={styles.img_line02}></span>
                                <span className={styles.img_line03}></span>
                                <span className={styles.img_line04}></span>
                            </div>
                        </div>
                        <div className={styles[item.ballClass]}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
