import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
import { errorHandler } from "./middleware/error.middleware";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api", routes);

// Error Handler
app.use(errorHandler);

export default app;
