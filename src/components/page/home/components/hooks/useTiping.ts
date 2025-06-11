import { useEffect, useMemo, useState } from 'react';

type TypingChar = string | { char: string; className: string };

interface TypingResult {
    renderedLines: TypingChar[][];
    isTyping: boolean;
    lineIdx: number;
}

export function useTypingEffect(
    text: string,
    typingReady: boolean,
    intervalTime: number = 70
): TypingResult {
    const lines = useMemo(() => text.split('\n'), [text]);
    const [lineIdx, setLineIdx] = useState(0);
    const [typingIdx, setTypingIdx] = useState(0);
    const [renderedLines, setRenderedLines] = useState<TypingChar[][]>([[]]);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!typingReady || !isTyping) return;

        const interval = setInterval(() => {
            const currentLine = lines[lineIdx];
            const currentChar = currentLine[typingIdx];

            let formattedChar: TypingChar = currentChar;
            if (currentChar === '우' || currentChar === '주') {
                formattedChar = { char: currentChar, className: 'space' };
            } else if (currentChar === '웹') {
                formattedChar = { char: currentChar, className: 'wep' };
            }

            setRenderedLines(prev => {
                const updated = [...prev];
                const current = [...(updated[lineIdx] || []), formattedChar];
                updated[lineIdx] = current;
                return updated;
            });

            if (typingIdx + 1 >= currentLine.length) {
                if (lineIdx + 1 >= lines.length) {
                    clearInterval(interval);
                    setIsTyping(false);
                } else {
                    setLineIdx(prev => prev + 1);
                    setTypingIdx(0);
                    setRenderedLines(prev => [...prev, []]);
                }
            } else {
                setTypingIdx(prev => prev + 1);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [typingReady, typingIdx, lineIdx, isTyping, intervalTime, lines]);

    return { renderedLines, isTyping, lineIdx };
}
