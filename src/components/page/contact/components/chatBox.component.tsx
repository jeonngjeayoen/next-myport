"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./chatBox.module.scss";
import { useFormattedMessages } from "./hooks/useFormattedMessages";
import { initialMessage } from "./data/chatData";
import { useChatHandler } from "./hooks/useChatHandler";

interface ChatboxProps {
    externalInput: string;
    submitTrigger: number;
    clearExternalInput: () => void;
}

export default function Chatbox({ externalInput, submitTrigger, clearExternalInput }: ChatboxProps) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
    const chatRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        setMessages([initialMessage]);
    }, []);

    const { handleSubmit } = useChatHandler({ setMessages, clearExternalInput, setInput });

    const { formattedMessages, displayText } = useFormattedMessages(messages);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, displayText]);

    useEffect(() => {
        if (externalInput) {
            handleSubmit(externalInput);
        }
    }, [submitTrigger, externalInput, handleSubmit]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(input);
    };

    return (
        <div className={styles.chat_box}>
            <form onSubmit={handleFormSubmit}>
                <ul className={styles.chat_screen} ref={chatRef}>
                    {formattedMessages.map((msg) => (
                        <li key={msg.key} className={styles[msg.className]}>
                            <span>{msg.content}</span>
                        </li>
                    ))}
                </ul>
                <label>
                    <input
                        type="text"
                        placeholder="질문을 입력해주세요"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">보내기</button>
                </label>
            </form>
        </div>
    );
}
