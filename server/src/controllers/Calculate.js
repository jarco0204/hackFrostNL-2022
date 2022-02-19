import { Calculator } from "../models/Calculator.js";

/**
 * Handles operations to /example/test
 * @param {*} req.body.userID
 * @param {*} res
 */
export const getAnswer = async (req, res) => {
    console.log("Request received: ", req.body); // Prints in server log

    //Interact with your Model ;)
    let message = await Calculator.test();
    console.log(message);
    res.status(202).send({
        messageSent: message,
    });
};
