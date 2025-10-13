"use client";
import { Message } from "@/types/chat";
import React from "react";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const getAvatarColor = (isOwn: boolean) => {
    return isOwn ? "from-green-500 to-teal-500" : "from-purple-500 to-blue-500";
  };

  return (
    <div className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex gap-2 max-w-xl ${
          message.isOwn ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`w-8 h-8 bg-gradient-to-br ${getAvatarColor(
            message.isOwn
          )} rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}
        >
          {message.avatar || (message.isOwn ? "FH" : "Y")}
        </div>
        <div>
          {message.reply && (
            <div className="bg-purple-50 border-l-4 border-purple-500 p-2 mb-1 rounded text-xs">
              <div className="font-semibold text-purple-700">
                {message.reply.sender}
              </div>
              <div className="text-gray-600">{message.reply.text}</div>
            </div>
          )}
          <div
            className={`rounded-lg p-3 ${
              message.isOwn
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            {!message.isOwn && (
              <div className="text-xs font-semibold mb-1 opacity-70">
                {message.sender}
              </div>
            )}
            <p className="text-sm">{message.text}</p>
          </div>
          {message.time && (
            <div
              className={`text-xs text-gray-500 mt-1 ${
                message.isOwn ? "text-right" : "text-left"
              }`}
            >
              {message.time}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
