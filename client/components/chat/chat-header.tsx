"use client";
import React from 'react';
import { HiMenu, HiVideoCamera, HiPhone, HiUsers, HiSearch, HiDotsVertical } from 'react-icons/hi';

interface ChatHeaderProps {
  contactName: string;
  contactAvatar: string;
  onMenuClick: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ contactName, contactAvatar, onMenuClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={onMenuClick}
            aria-label="Toggle sidebar"
          >
            <HiMenu className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {contactAvatar}
          </div>
          <div>
            <h3 className="font-semibold">{contactName}</h3>
            <div className="flex gap-2 text-xs text-gray-500">
              <button className="hover:underline">Chat</button>
              <button className="hover:underline">Files</button>
              <button className="hover:underline">Photos</button>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Video call">
            <HiVideoCamera className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Audio call">
            <HiPhone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Add participants">
            <HiUsers className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Search">
            <HiSearch className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="More options">
            <HiDotsVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;