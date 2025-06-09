'use client';

import { useEffect, useState } from 'react';
import styles from './tipingBox.module.scss';
import { useTypingEffect } from './hooks/useTiping';

const text = `안녕하세요,  항상 무한한 우주처럼
성장력이 있는 웹 개발자 정재연입니다.
저와 같이 우주여행을 떠나 볼까요?`;

export default function TypingBox() {
    const [isActive, setIsActive] = useState(false);
    const [typingReady, setTypingReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
            setTypingReady(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const { renderedLines, lineIdx, isTyping } = useTypingEffect(text, typingReady);
    return (
        <div className={`${styles.typing_box} ${isActive ? styles.active : ''}`}>
            <div className={`${styles.typing} ${isActive ? styles.active : ''}`}>
                {renderedLines.map((line, i) => (
                    <div key={i} className={styles.line}>
                        <span className={styles.line_txt}>
                            {line.map((charObj, idx) => {
                                if (typeof charObj === 'string') {
                                    return charObj;
                                } else if (charObj.className) {
                                    return (
                                        <span key={idx} className={styles[charObj.className]}>
                                            {charObj.char}
                                        </span>
                                    );
                                } else {
                                    return charObj.char;
                                }
                            })}
                            {(i === lineIdx || (!isTyping && i === renderedLines.length - 1)) && (
                                <span className={`${styles.cursor} ${isActive ? styles.active : ''}`} />
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
