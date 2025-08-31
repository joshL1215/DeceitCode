import type { ErrorRequestHandler } from "express";
import z from "zod";

const errorHandler:ErrorRequestHandler = (error, req, res, next) => {
    console.log(`Path: ${req.path} `, error);

    if (error instanceof z.ZodError) {
        return res.status(400).send("Bad request")
    }
    return res.status(500).send("Internal server error");
};

export default errorHandler;