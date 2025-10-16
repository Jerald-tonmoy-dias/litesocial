import { Schema, model, Document } from "mongoose";

export interface IMessage extends Document {
  chatId: Schema.Types.ObjectId; // Can be group or 1:1 chat
  sender: Schema.Types.ObjectId;
  content: string;
  readBy: Schema.Types.ObjectId[];
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    chatId: { type: Schema.Types.ObjectId, required: true, ref: "Chat" },
    sender: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    content: { type: String, required: true },
    readBy: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

export default model<IMessage>("Message", messageSchema);
