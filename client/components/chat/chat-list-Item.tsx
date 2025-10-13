"use client";
import { Chat } from "@/types/chat";
import React from "react";

interface ChatListItemProps {
  chat: Chat;
  isSelected?: boolean;
  onClick?: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  chat,
  isSelected,
  onClick,
}) => {
  const getAvatarColor = (id: number) => {
    const colors = [
      "from-purple-500 to-blue-500",
      "from-green-500 to-teal-500",
      "from-pink-500 to-rose-500",
      "from-orange-500 to-amber-500",
      "from-indigo-500 to-purple-500",
    ];
    return colors[id % colors.length];
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
        isSelected ? "bg-purple-50" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-10 h-10 bg-gradient-to-br ${getAvatarColor(
          chat.id
        )} rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
      >
        {chat.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm truncate">{chat.name}</span>
          <span className="text-xs text-gray-500 ml-2">{chat.time}</span>
        </div>
        <p className="text-xs text-gray-600 truncate">{chat.lastMessage}</p>
      </div>
      {chat.unreadCount && chat.unreadCount > 0 && (
        <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-semibold">
            {chat.unreadCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
