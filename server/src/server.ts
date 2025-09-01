import "dotenv/config";
import cors from "cors";
import express, { application } from "express";
import { APP_ORIGIN } from "./constants/env.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/db.js";
import catchErrors from "./utils/catchErrors.js";
import authRoutes from "./routes/auth-routes.js";

const App = express();

App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(
    cors({
        origin: APP_ORIGIN,
        credentials: true,
    })
);
App.use(cookieParser());

// Test endpoint
App.get("/", 
    catchErrors(async (req, res, next) => {
        // throw new Error("TEST");
        return res.status(200).json({
            status: "Healthy",
        });
    })
);

App.use("/auth", authRoutes)

App.use(errorHandler);

App.listen(5000, async () => {
    console.log("Server started at http://localhost:5000");
    await connectDb();
});