import { useCallback } from "react";
import { keywordResponses } from "../data/chatData";

interface Message {
    sender: "user" | "bot";
    text: string;
}

interface UseChatHandlerOptions {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    clearExternalInput: () => void;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

export function useChatHandler({ setMessages, clearExternalInput }: UseChatHandlerOptions) {
    const findResponse = useCallback((input: string): string => {
        const trimmed = input.trim();
        for (const group of keywordResponses) {
            if (group.keywords.includes(trimmed)) {
                return group.response;
            }
        }
        return "죄송해요. 아직 모르는 질문이에요!";
    }, []);

    const handleSubmit = useCallback((input: string) => {
        const userMsg = input.trim();
        if (!userMsg) return;

        const response = findResponse(userMsg);

        setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);

        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text: response }]);
        }, 100);

        clearExternalInput();
    }, [findResponse, setMessages, clearExternalInput]);

    return { handleSubmit };
}
