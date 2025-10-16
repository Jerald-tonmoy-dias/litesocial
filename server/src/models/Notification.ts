import { Schema, model, Document } from "mongoose";

export interface INotification extends Document {
  type: string;
  recipient: Schema.Types.ObjectId;
  sender?: Schema.Types.ObjectId;
  content: string;
  read: boolean;
  createdAt: Date;
}

const notificationSchema = new Schema<INotification>(
  {
    type: { type: String, required: true },
    recipient: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    read: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default model<INotification>("Notification", notificationSchema);
