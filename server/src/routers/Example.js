import express from "express";
import { getAnswer } from "../controllers/Calculate.js";

const exampleRouter = express.Router(); // Handles all potential routes starting with /example

/**
 * This route test the initial MVC architecture
 * Routes to /example/test
 */
exampleRouter.route("/test").get(getAnswer);

export default exampleRouter;
