"use client";

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import styles from './Titlebox.module.scss';

export default function TitleBox() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 제목 애니메이션
            gsap.fromTo(`.${styles.name_tit} span`,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 1, stagger: 0.1 }
            );

            // 설명 텍스트 애니메이션
            gsap.fromTo(`.${styles.dev_p} span`,
                { opacity: 0, y: 0 },
                { opacity: 1, y: -50, duration: 0.5, ease: 'power1.out', stagger: 0.2 }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className={styles.title_box}>
            <h2 className={styles.name_tit}>
                {'JungUniverse'.split('').map((char, idx) => (
                    <span key={`char-${idx}`}>
                        {char}
                    </span>
                ))}
            </h2>
            <p className={styles.dev_p}>
                {'Wep Developer'.split('').map((char, idx) =>
                    char === ' ' ? (
                        <span key={`space-${idx}`}>&nbsp;</span>
                    ) : (
                        <span key={`char2-${idx}`}>{char}</span>
                    )
                )}
            </p>
        </div>
    );
}

