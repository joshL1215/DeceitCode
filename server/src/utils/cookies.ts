import type { CookieOptions, Response } from "express";

const defaultCookieOptions: CookieOptions = {
    sameSite: "strict",
    httpOnly: true,
    secure: true,
}

const getAccessCookieOptions = (): CookieOptions => ({
    ...defaultCookieOptions,
    expires: new Date(Date.now() + 15 * 60 * 1000),
})

const getRefreshCookieOptions = (): CookieOptions => ({
    ...defaultCookieOptions,
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    path: "/auth/refresh"
});

type p = {
    res: Response;
    accessToken: string;
    refreshToken: string;
}

export const setAuthCookies = ({res, accessToken, refreshToken}: p) => res
    .cookie("accessToken", accessToken, getAccessCookieOptions())
    .cookie("refreshToken", refreshToken, getRefreshCookieOptions());
