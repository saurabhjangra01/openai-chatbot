import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", error: error.message });
    }
};

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email, password } = req.body;

        // check if a user with same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send("Email already registered");
        }

        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        // create token and store cookies
        // authorization -> generate a token for user, user will use that token to access resources
        const token = createToken(user._id.toString(), user.email, "7d");

        // calculate cookie expiry date
        const cookieExpiry = new Date();
        cookieExpiry.setDate(cookieExpiry.getDate() + 7);

        // send cookie from backend to frontend
        res.cookie(COOKIE_NAME, token, {
            path: "/", // inside root directory of cookies
            domain: "localhost", // if deploying to production, add your domain name here
            expires: cookieExpiry,
            httpOnly: true,
            signed: true,
        });

        return res
            .status(201)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", error: error.message });
    }
};

export const userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // authentication
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("Email not registered");
        }

        const checkPassword = await compare(password, user.password);
        if (!checkPassword) {
            // password not correct
            return res.status(403).send("Password is Incorrect");
        }

        // clear previous login cookies
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });

        // authorization -> generate a token for user, user will use that token to access resources
        const token = createToken(user._id.toString(), user.email, "7d");

        // calculate cookie expiry date
        const cookieExpiry = new Date();
        cookieExpiry.setDate(cookieExpiry.getDate() + 7);

        // send cookie from backend to frontend
        res.cookie(COOKIE_NAME, token, {
            path: "/", // inside root directory of cookies
            domain: "localhost", // if deploying to production, add your domain name here
            expires: cookieExpiry,
            httpOnly: true,
            signed: true,
        });

        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", error: error.message });
    }
};

export const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res
                .status(401)
                .send("User not registered or token malfunctioned");
        }

        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }

        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", error: error.message });
    }
};
