import express from "express";
import exampleRouter from "./Routers/Example.js";
import cors from "cors";

//Instantiation of main app
const app = express();
let server;

// Middleware
app.use(express.json()); // support json encoded bodies
app.use(cors());

// GET Route
app.use("/example", exampleRouter);

// Start of the Express Server
export const start = async () => {
    const port = 8000;
    server = app.listen(port, () => {
        console.log("Express API server is listening on port 8000");
    });
};
