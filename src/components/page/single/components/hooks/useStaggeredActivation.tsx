import { useEffect, useState } from "react";

export function useStaggeredActivation(length: number, delays: number[]) {
    const [activeStates, setActiveStates] = useState<boolean[]>(Array(length).fill(false));

    useEffect(() => {
        for (let i = 0; i < length; i++) {
            const reversedIndex = length - 1 - i;
            const delay = delays[i] ?? i * 1000;

            setTimeout(() => {
                setActiveStates(prev => {
                    const updated = [...prev];
                    updated[reversedIndex] = true;
                    return updated;
                });
            }, delay);
        }
    }, [length, delays]);

    return activeStates;
}
