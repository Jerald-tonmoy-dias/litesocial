"use client";
import React, { useState, FormEvent } from "react";
import {
  HiEmojiHappy,
  HiPaperClip,
  HiPlus,
  HiPaperAirplane,
} from "react-icons/hi";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  placeholder = "Type a message",
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          aria-label="Add emoji"
        >
          <HiEmojiHappy className="w-5 h-5 text-gray-600" />
        </button>
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          aria-label="Attach file"
        >
          <HiPaperClip className="w-5 h-5 text-gray-600" />
        </button>
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          aria-label="More options"
        >
          <HiPlus className="w-5 h-5 text-gray-600" />
        </button>
        <button
          type="submit"
          className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <HiPaperAirplane className="w-5 h-5 text-white" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
