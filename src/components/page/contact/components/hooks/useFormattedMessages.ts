import { useMemo } from "react";
import { useTypewriter } from "./useTypewriter";

interface Message {
    sender: "user" | "bot";
    text: string;
}

interface FormattedMessage {
    key: number;
    className: "user" | "chat";
    content: string;
}

export function useFormattedMessages(messages: Message[]) {
    const lastBotIdx = useMemo(() => {
        const reversed = [...messages].reverse();
        return reversed.findIndex((msg) => msg.sender === "bot");
    }, [messages]);

    const botMessage = useMemo(() => {
        if (lastBotIdx === -1) return "";
        return messages[messages.length - 1 - lastBotIdx].text;
    }, [messages, lastBotIdx]);

    const displayText = useTypewriter(botMessage, 50);

    const formattedMessages: FormattedMessage[] = messages.map((msg, idx) => {
        const isLastBot = msg.sender === "bot" && idx === messages.length - 1 - lastBotIdx;
        const prefix = msg.sender === "user" ? "나 : " : "유니 : ";
        const className: "user" | "chat" = msg.sender === "user" ? "user" : "chat";
        const content = isLastBot ? prefix + displayText : prefix + msg.text;

        return {
            key: idx,
            className,
            content,
        };
    });

    return { formattedMessages, displayText };
}
