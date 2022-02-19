import express from "express";
import { getAnswer, saveAnswer } from "../controllers/Calculate.js";

const exampleRouter = express.Router(); // Handles all potential routes starting with /example

/**
 * This route test the initial MVC architecture of a GET method
 * Routes to /example/test
 */
exampleRouter.route("/test").get(getAnswer);

/**
 * POST method
 * Routes to /example/test
 */
exampleRouter.route("/test").post(saveAnswer);

export default exampleRouter;
