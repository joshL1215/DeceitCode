import SessionModel from "../models/session-model";
import UserModel from "../models/user-model";

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

    const sesson = await SessionModel.create({
        userId: user._id,
        userAgent: data.userAgent,
    });

    

}
