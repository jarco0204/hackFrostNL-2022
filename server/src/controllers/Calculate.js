import { Calculator } from "../models/Calculator.js"; // Named exports

/**
 * Handles GET operations to /example/test
 * @param {*} req.body.userID
 * @param {*} res
 */
export const getAnswer = async (req, res) => {
    console.log("GET Request received: ", req.body); // Prints in server log

    //Interact with your Model ;)
    let message = await Calculator.test();
    console.log(message);
    res.status(202).send({
        messageSent: message,
    });
};

/**
 * Handles POST operations to /example/test
 * Request body must have a var1, var2, and operation keys
 * @param {*} req.body.userID
 * @param {*} res
 */
export const saveAnswer = async (req, res) => {
    console.log("POST Request received: ", req.body); // Prints in server log

    let var1 = req.body.var1;
    let var2 = req.body.var2;
    let operation = req.body.operation;

    // If it doesn't contain, then return with an error code 404
    if (var1 === null || var2 == null || operation == null) {
        console.log("error ");
        res.status(404).send({
            messageSent: "error wrong parameters",
        });
        return;
    }

    //Interact with your Model ;)
    let message = Calculator.saveParams(var1, var2, operation);
    console.log(message);
    res.status(202).send({
        messageSent: message,
    });
};
