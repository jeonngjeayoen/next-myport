import styles from "./footer.module.scss"
import Link from "next/link";

export default function Header() {
    return (
        <footer className={styles.footer}>
            <h2>
                <Link href="/">
                    <span className={styles.footer_logo}></span>
                </Link >
            </h2>
            <p>
                Copyright © 2025 Jung Jea Yeon. All Rights Reserved
            </p>
            <aside className={styles.top_btn}>
                <Link href="#">
                    Back to Top
                </Link>
            </aside>
        </footer>
    )
}