import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

// middlewares
app.use(
    cors({
        origin: "http://localhost:5173", // allows ths domain to request the backend server
        credentials: true, // allows frontend to send the cookies to backend with the requests
    })
);
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); // to send cookies from backend to frontend

app.use(morgan("dev")); // HTTP request logger middleware // remove it in production mode. only used for dev mode

app.use("/api/v1", appRouter);

export default app;
