"use client";
import { Message } from "@/types/chat";
import React, { useRef, useEffect } from "react";
import MessageBubble from "./message-bubble";

interface MessagesAreaProps {
  messages: Message[];
}

const MessagesArea: React.FC<MessagesAreaProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesArea;
