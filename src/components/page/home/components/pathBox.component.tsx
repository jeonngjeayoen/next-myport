'use client';

import { useRef } from 'react';
import styles from './pathBox.module.scss';
import { usePathFollower } from './hooks/usePathBox';

export default function PathBox() {
    const pathRef = useRef<SVGPathElement>(null);
    const starRef = useRef<HTMLSpanElement>(null);

    usePathFollower(pathRef, starRef, 6000);

    return (
        <div className={styles.path_box}>
            <svg className={styles.path_line} viewBox="0 0 764 352" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <path
                    ref={pathRef}
                    d="M761.023 33.2887C782.43 90.1434 630.09 200.127 420.761 278.945C211.433 357.762 24.3842 375.566 2.97704 318.712C-18.4301 261.857 133.91 151.873 343.239 73.0556C552.568 -5.76175 739.616 -23.562 761.023 33.2887Z"
                    fill="transparent"
                />
            </svg>
            <svg className={styles.path02} viewBox="0 0 764 352" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M761.023 33.2887C782.43 90.1434 630.09 200.127 420.761 278.945C211.433 357.762 24.3842 375.566 2.97704 318.712C-18.4301 261.857 133.91 151.873 343.239 73.0556C552.568 -5.76175 739.616 -23.562 761.023 33.2887Z"
                    fill="transparent"
                />
            </svg>
            <span ref={starRef} className={styles.rotete_star}></span>
        </div>
    );
}
