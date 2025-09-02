import jwt from "jsonwebtoken";
import SessionModel from "../models/session-model.js";
import UserModel from "../models/user-model.js";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env.js";

export type CreateAccountParams = {
    username: string;
    password: string;
    userAgent?: string;
}

export const createAccount = async (data: CreateAccountParams) => {
    
    if (await UserModel.exists({username: data.username})) {
        throw new Error("An account with this username already exists")
    }

    const user = await UserModel.create({
        username: data.username,
        password: data.password,
    });

    const session = await SessionModel.create({
        userId: user._id,
        userAgent: data.userAgent,
    });

    const refreshToken = jwt.sign(
        {sessionId: session._id},
        JWT_REFRESH_SECRET,
        {
            audience: ["user"],
            expiresIn: "30d",
        }
    );

    const accessToken = jwt.sign(
        {userId: user._id,
        sessionId: session._id},
        JWT_SECRET,
        {
            audience: ["user"],
            expiresIn: "15m",
        }
    );

    return {
        user: {
            username: user.username,
            _id: user._id,
        },
        accessToken,
        refreshToken,
    }
};

type LoginParams = {
    username: string;
    password: string;
    userAgent?: string;
};

export const loginUser = async ({username, password, userAgent}:LoginParams) => {

    const user = await UserModel.findOne({username});
    if (!user) throw new Error("Invalid username or password");
    
    const valid = await user.comparePass(password);
    if (!valid) throw new Error("Invalid user or");

    const userId = user._id;

    const session = await SessionModel.create({
        userId, 
        userAgent,
    });    

    const refreshToken = jwt.sign(
        {
            sessionId: session._id,
        },
        JWT_REFRESH_SECRET,
        {
            audience: ["user"],
            expiresIn: "30d",
        }
    );

    const accessToken = jwt.sign(
        {
            sessionId: session._id,
        },
        JWT_SECRET,
        {
            audience: ["user"],
            expiresIn: "15m",
        }
    )

    return {
        user: {
            username: user.username,
            _id: user._id,
        },
        accessToken,
        refreshToken,
    }
}
