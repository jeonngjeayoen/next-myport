"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./chatBox.module.scss";
import { useFormattedMessages } from "./hooks/useFormattedMessages";
import { keywordResponses, initialMessage } from "./data/chatData";

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

    const { formattedMessages, displayText } = useFormattedMessages(messages);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, displayText]);

    // ✅ 외부에서 값 전달되면 자동 제출
    useEffect(() => {
        if (externalInput) {
            handleSubmit(externalInput);
        }
    }, [submitTrigger]);

    const findResponse = (userInput: string): string => {
        const trimmed = userInput.trim();
        for (const group of keywordResponses) {
            if (group.keywords.includes(trimmed)) {
                return group.response;
            }
        }
        return "죄송해요. 아직 모르는 질문이에요!";
    };

    const handleSubmit = (value: string) => {
        const userMsg = value.trim();
        if (!userMsg) return;

        const response = findResponse(userMsg);
        setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);

        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text: response }]);
        }, 100);

        setInput("");
        clearExternalInput(); // ✅ 외부 상태 초기화
    };

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

