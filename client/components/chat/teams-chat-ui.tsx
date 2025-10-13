"use client";
import { Chat, Message } from "@/types/chat";
import { useState } from "react";
import ChatSidebar from "./chat-sidebar";
import ChatHeader from "./chat-header";
import MessagesArea from "./messages-area";
import MessageInput from "./message-input";

export default function TeamsChatUI() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState<number>(2);

  const chats: Chat[] = [
    {
      id: 1,
      name: "Frontend Developers",
      lastMessage: "You: Sure, I’ll check it out.",
      time: "9/22",
      avatar: "FD",
      pinned: true,
    },
    {
      id: 2,
      name: "UI/UX Team",
      lastMessage: "Emma: Send me the latest build.",
      time: "10:45 PM",
      avatar: "UX",
      pinned: true,
    },
    {
      id: 3,
      name: "Project Alpha",
      lastMessage: "Daniel: Looks good to me!",
      time: "10/12",
      avatar: "PA",
      pinned: true,
    },
    {
      id: 4,
      name: "Marketing Team",
      lastMessage: "You: I’ve updated the campaign assets.",
      time: "8/26",
      avatar: "MT",
      pinned: true,
    },
    {
      id: 5,
      name: "Client - Nova Inc.",
      lastMessage: "Alex: Let’s schedule a quick call.",
      time: "10/4",
      avatar: "NI",
      pinned: false,
    },
    {
      id: 6,
      name: "Emma Johnson",
      lastMessage: "You: Got it, thank you!",
      time: "11:30 PM",
      avatar: "EJ",
      pinned: false,
      unreadCount: 2,
    },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "You",
      text: "Hey, I just checked the latest build. Everything looks fine so far.",
      time: "",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Emma Johnson",
      text: "Great! Did you test the login flow as well?",
      time: "",
      isOwn: true,
    },
    {
      id: 3,
      sender: "You",
      text: "Yes, but I noticed the reset password link isn’t working correctly.",
      time: "",
      isOwn: false,
    },
    {
      id: 4,
      sender: "Emma Johnson",
      text: "Alright, I’ll take a look at that. Thanks for catching it!",
      time: "10/12/2025 3:08 PM",
      isOwn: true,
      reply: {
        sender: "You",
        text: "Yes, but I noticed the reset password link isn’t working correctly.",
      },
    },
    {
      id: 5,
      sender: "You",
      text: "No problem, just wanted to flag it early.",
      time: "",
      isOwn: false,
    },
    {
      id: 6,
      sender: "Emma Johnson",
      text: "Appreciate it. I’ll push a fix soon.",
      time: "",
      isOwn: true,
    },
    {
      id: 7,
      sender: "Emma Johnson",
      text: "By the way, the client approved the new UI layout.",
      time: "",
      isOwn: true,
    },
    {
      id: 8,
      sender: "Emma Johnson",
      text: "Check your email for the updated design files.",
      time: "Yesterday 9:39 AM",
      isOwn: true,
    },
    {
      id: 9,
      sender: "You",
      text: "Perfect! I’ll review them today.",
      time: "",
      isOwn: false,
    },
  ]);

  const currentChat = chats.find((chat) => chat.id === selectedChatId);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "You",
      text,
      time: new Date().toLocaleTimeString(),
      isOwn: false,
    };
    setMessages([...messages, newMessage]);
  };

  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selecting chat
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <ChatSidebar
        chats={chats}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onChatSelect={handleChatSelect}
        selectedChatId={selectedChatId}
      />

      <div className="flex-1 flex flex-col">
        <ChatHeader
          contactName={currentChat?.name || "Chat"}
          contactAvatar={currentChat?.avatar || "FH"}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <MessagesArea messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
