import { useState, useEffect } from "react";

export function useTypewriter(text: string, delay = 50): string {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayed("");
        setIndex(0);
    }, [text]);

    useEffect(() => {
        if (index >= text.length) return;

        const interval = setInterval(() => {
            setDisplayed(prev => prev + text.charAt(index));
            setIndex(prev => prev + 1);
        }, delay);

        return () => clearInterval(interval);
    }, [index, text, delay]);

    return displayed;
}
