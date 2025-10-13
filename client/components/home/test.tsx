"use client";


import { useState } from 'react';
import { HiMenu, HiVideoCamera, HiPhone, HiUsers, HiSearch, HiDotsVertical, HiPaperClip, HiPaperAirplane, HiEmojiHappy, HiPlus, HiX } from 'react-icons/hi';
import { MdVideoCall, MdEdit } from 'react-icons/md';

export default function TeamsChatUI() {
  const [message, setMessage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const chats = [
    { id: 1, name: 'Frontend Genius', lastMessage: 'You: okk vai', time: '8/24', avatar: 'FG', pinned: true },
    { id: 2, name: 'Senior GDEVS', lastMessage: 'Farhad: soiii', time: '10:30 PM', avatar: 'SD', pinned: true },
    { id: 3, name: 'GeniusTeam', lastMessage: 'Badruddoza: Thanks Shi...', time: '10/12', avatar: 'GT', pinned: true },
    { id: 4, name: 'Charity Review', lastMessage: 'You: amr dik theke jegu...', time: '8/26', avatar: 'CR', pinned: true },
    { id: 5, name: 'Carlist', lastMessage: 'Farhad: Oka', time: '10/4', avatar: 'CL', pinned: false },
    { id: 6, name: 'Farhad Hossain', lastMessage: 'You: mia natok ses tarp...', time: '11:30 PM', avatar: 'FH', pinned: false },
  ];

  const messages = [
    {
      id: 1,
      sender: 'You',
      text: 'bro B vai bolse demo credentials gulo check dite apnake. flutter app er demo login gulo check dite bolse',
      time: '',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Farhad Hossain',
      text: 'keno kaj korche na naki?',
      time: '',
      isOwn: true
    },
    {
      id: 3,
      sender: 'You',
      text: 'ami recently genius wallet demo app ta check dicchilam client support er jonno. oitar credentials invalid dekhai',
      time: '',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Farhad Hossain',
      text: 'keno kaj korche na naki?',
      time: '10/12/2023 3:08 PM',
      isOwn: true,
      reply: true
    },
    {
      id: 5,
      sender: 'You',
      text: 'hae',
      time: '',
      isOwn: false
    },
    {
      id: 6,
      sender: 'Farhad Hossain',
      text: 'oky',
      time: '',
      isOwn: true
    },
    {
      id: 7,
      sender: 'Farhad Hossain',
      text: 'dekhci',
      time: '',
      isOwn: true
    },
    {
      id: 8,
      sender: 'Farhad Hossain',
      text: 'apnar ticket er reply eseche bro',
      time: 'Yesterday 9:39 AM',
      isOwn: true
    },
    {
      id: 9,
      sender: 'You',
      text: 'thanks bro',
      time: '',
      isOwn: false
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Chat</h2>
            <div className="flex gap-2">
              <button className="lg:hidden p-2 hover:bg-gray-100 rounded" onClick={() => setIsSidebarOpen(false)}>
                <HiX className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <HiMenu className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <MdVideoCall className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <MdEdit className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {/* Pinned Section */}
          <div className="p-2">
            <div className="text-xs font-semibold text-gray-500 px-2 py-1">Pinned</div>
            {chats.filter(chat => chat.pinned).map(chat => (
              <div key={chat.id} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {chat.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm truncate">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Section */}
          <div className="p-2">
            <div className="text-xs font-semibold text-gray-500 px-2 py-1">Recent</div>
            {chats.filter(chat => !chat.pinned).map(chat => (
              <div key={chat.id} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {chat.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm truncate">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <HiMenu className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                FH
              </div>
              <div>
                <h3 className="font-semibold">Farhad Hossain</h3>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Chat</span>
                  <span>Files</span>
                  <span>Photos</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                <HiVideoCamera className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <HiPhone className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <HiUsers className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <HiSearch className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <HiDotsVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-xl ${msg.isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
                {!msg.isOwn && (
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                    Y
                  </div>
                )}
                {msg.isOwn && (
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                    FH
                  </div>
                )}
                <div>
                  {msg.reply && (
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-2 mb-1 rounded text-xs">
                      <div className="font-semibold text-purple-700">Farhad Hossain</div>
                      <div className="text-gray-600">keno kaj korche na naki?</div>
                    </div>
                  )}
                  <div className={`rounded-lg p-3 ${msg.isOwn ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                    {!msg.isOwn && <div className="text-xs font-semibold mb-1 opacity-70">{msg.sender}</div>}
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  {msg.time && (
                    <div className={`text-xs text-gray-500 mt-1 ${msg.isOwn ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="p-2 hover:bg-gray-100 rounded">
              <HiEmojiHappy className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <HiPaperClip className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <HiPlus className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg">
              <HiPaperAirplane className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}