import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";

export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { message } = req.body;

        // fetch user details from db
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({
                message: "User not registered or token malfunctioned",
            });
        }

        // fetch chats of the user
        const chats = user.chats.map(({ role, content }) => ({
            role,
            content,
        })) as ChatCompletionRequestMessage[];

        // combine new message and previous chats to send to openAI API (sending previous chats to provide context of the chat as suggested in OpenAI doc)
        chats.push({ role: "user", content: message });

        // store new message in the user object as well
        user.chats.push({ role: "user", content: message });

        const config = configureOpenAI();
        const openai = new OpenAIApi(config);

        const chatCompletionResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });

        user.chats.push(chatCompletionResponse.data.choices[0].message);
        await user.save();

        return res.status(200).json({ chats: user.chats });
    } catch (error) {
        console.log(error);
        return res.send(500).json({ message: "Something went wrong" });
    }
};
