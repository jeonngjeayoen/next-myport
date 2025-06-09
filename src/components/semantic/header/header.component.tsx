import Link from "next/link";
import styles from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
type HeaderProps = {
    before: string;
    after: string;
};
export default function Header({ before, after }: HeaderProps) {
    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">
                    <span className={styles.h1_logo}></span>
                </Link >
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link href={before}>
                            <FontAwesomeIcon icon={faArrowLeft} />{before}
                        </Link >
                    </li>
                    <li>
                        <Link href={after}>
                            {after} <FontAwesomeIcon icon={faArrowRight} />
                        </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}