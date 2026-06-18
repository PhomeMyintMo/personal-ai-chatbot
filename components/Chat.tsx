"use client"
import { ChatMessage } from "@/types/chat";
import { useEffect, useRef, useState } from "react"
import Message from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import { portfolio } from "@/lib/portfolio";
import AssistantProfile from "./AssistantProfile";
import Image from "next/image";

export default function Chat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages])

    async function handleSend(text?: string) {
        try {
            const messageText = text ?? input;
            if (!messageText.trim()) return;
            setIsLoading(true);
            const userMessage = {
                id: crypto.randomUUID(),
                role: "user" as const,
                content: messageText,
                createdAt: Date.now()
            };
            const updatedMessages = [...messages, userMessage]
            setMessages(updatedMessages);
            setInput("");

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: updatedMessages
                })
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: data.message,
                    createdAt: Date.now()
                }
            ])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: error instanceof Error
                        ? error.message
                        : "Something went wrong!",
                    createdAt: Date.now(),
                    isError: true
                },
            ]);
        }
        finally {
            setIsLoading(false)
        }

    }
    return (
        <div className="">
            <div className="mx-auto flex h-screen flex-col max-w-2xl py-4 no-scrollbar">
                {/* <header className="border-b p-4">
                <h1 className="text-xl font-bold">
                    {portfolio.name}'s Assistant AI
                </h1>

                <p className="text-sm text-gray-500">
                    Ask anything about me.
                </p>
            </header> */}
                <div className="flex-1 overflow-y-auto space-y-6 p-6">
                    {
                        messages.length === 0 ? (
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src="/avatar.jpg"
                                        alt={portfolio.name}
                                        width={24}
                                        height={24}
                                        className="rounded-full border"
                                    />
                                    <h2 className="text-2xl font-semibold">
                                        Hi! I am {portfolio.name}👋
                                    </h2>

                                </div>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {portfolio.suggestions.map((question) => (
                                        <button
                                            key={question}
                                            onClick={() => handleSend(question)}
                                            className="rounded-full border-blue-300 border px-4 py-2  hover:bg-gray-300/50 cursor-pointer transition"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            messages.map((message) => (
                                <Message key={message.id} message={message} />
                            ))
                        )

                    }
                    {isLoading && <TypingIndicator />}
                    <div ref={bottomRef} />
                </div>
                <ChatInput
                    value={input}
                    onChange={setInput}
                    onSend={handleSend}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}