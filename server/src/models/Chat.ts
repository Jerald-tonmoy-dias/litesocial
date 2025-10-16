import { Schema, model, Document } from "mongoose";

export interface IChat extends Document {
  isGroup: boolean;
  members: Schema.Types.ObjectId[];
  name?: string; // Only for group chats
  admins?: Schema.Types.ObjectId[]; // For groups
  lastMessage?: string;
  createdAt: Date;
}

const chatSchema = new Schema<IChat>(
  {
    isGroup: { type: Boolean, default: false },
    members: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    name: { type: String }, 
    admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
    lastMessage: { type: String }
  },
  { timestamps: true }
);

export default model<IChat>("Chat", chatSchema);
