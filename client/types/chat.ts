export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  pinned: boolean;
  unreadCount?: number;
}

export interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
  reply?: {
    sender: string;
    text: string;
  };
  avatar?: string;
}