"use client";
import { Chat } from "@/types/chat";
import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdVideoCall, MdEdit } from "react-icons/md";
import ChatListItem from "./chat-list-Item";

interface ChatSidebarProps {
  chats: Chat[];
  isOpen: boolean;
  onClose: () => void;
  onChatSelect?: (chatId: number) => void;
  selectedChatId?: number;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chats,
  isOpen,
  onClose,
  onChatSelect,
  selectedChatId,
}) => {
  const pinnedChats = chats.filter((chat) => chat.pinned);
  const recentChats = chats.filter((chat) => !chat.pinned);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Chat</h2>
            <div className="flex gap-2">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                onClick={onClose}
                aria-label="Close sidebar"
              >
                <HiX className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                aria-label="Menu"
              >
                <HiMenu className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                aria-label="Video call"
              >
                <MdVideoCall className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                aria-label="New chat"
              >
                <MdEdit className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {/* Pinned Section */}
          {pinnedChats.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 px-2 py-1">
                Pinned
              </div>
              {pinnedChats.map((chat) => (
                <ChatListItem
                  key={chat.id}
                  chat={chat}
                  isSelected={selectedChatId === chat.id}
                  onClick={() => onChatSelect?.(chat.id)}
                />
              ))}
            </div>
          )}

          {/* Recent Section */}
          {recentChats.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 px-2 py-1">
                Recent
              </div>
              {recentChats.map((chat) => (
                <ChatListItem
                  key={chat.id}
                  chat={chat}
                  isSelected={selectedChatId === chat.id}
                  onClick={() => onChatSelect?.(chat.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
