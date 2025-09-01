import z from "zod";
import catchErrors from "../utils/catchErrors.js";
import { createAccount } from "../services/auth-service.js";
import { setAuthCookies } from "../utils/cookies.js";

const registerSchema = z.object({
    username: z.string().min(1).max(255),
    password: z.string().min(8).max(128),
    confirmPassword: z.string().min(8).max(128),
    userAgent: z.string().optional().default("unknown")
    })
    .refine((data) =>
    data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }
);

export const registerHandler = catchErrors(
    async (req, res) => {
        const request = registerSchema.parse({
            ...req.body,
            userAgent: req.headers["user-agent"],
        });

        const { user, accessToken, refreshToken } = await createAccount(request);

        // Sending access and refresh tokens to cookies
        // 201 = successfully created account
        return setAuthCookies({res, accessToken, refreshToken}).status(201).json(user)

    }
);