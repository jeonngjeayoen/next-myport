"use client"

import styles from "./contact.module.scss"
import UfoBox from "./components/ufoBox.component"
import ChatBox from "./components/chatBox.component"
import TinkleBack from "../../semantic/back/tinkleBack.component";
import { useEffect, useState } from "react"

export default function Contact() {
    const [isActive, setIsActive] = useState(false);

    const [externalInput, setExternalInput] = useState("");
    const [submitTrigger, setSubmitTrigger] = useState(0);

    useEffect(() => {
        setIsActive(true);
    }, []);

    const handleQuickSelect = (text: string) => {
        setExternalInput(text);
        setSubmitTrigger((prev) => prev + 1);
    };

    return (
        <main className={styles.contact_wrap}>
            <section className={styles.sec01}>
                <UfoBox onSelect={handleQuickSelect} />
                <ChatBox
                    externalInput={externalInput}
                    submitTrigger={submitTrigger}
                    clearExternalInput={() => setExternalInput("")}
                />
            </section>
            <div className={styles.back_illu}>
                <div className={`${styles.illu} ${isActive ? styles.active : ""}`} />
            </div>
            <TinkleBack />
        </main>
    )
}
