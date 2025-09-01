import jwt from "jsonwebtoken";
import SessionModel from "../models/session-model";
import UserModel from "../models/user-model";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";

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
        user,
        accessToken,
        refreshToken,
    };
}
