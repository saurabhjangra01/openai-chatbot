import mongoose from "mongoose";
import { randomUUID } from "crypto";

const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    role: {
        // there are 2 roles -> assistant, user (defines whose chat it is)
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: [chatSchema],
});

export default mongoose.model("User", UserSchema);
