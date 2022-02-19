import * as fs from "fs"; //implements the File I/O operation

export class Calculator {
    // Constructor of the class, instantiated in Controller
    constructor() {
        //Implemente your own logic
    }
    /**
     *
     * @param {*}
     * @param {*}
     */
    static async test() {
        return "Hello World from Core REST API";
    }

    /**
     * This message mimics the behaviour of database by writing the input parameters to a text file. Then, the result will be read by the a modified version of the GET method.
     * @param {*} string
     * @param {*} string
     * @param {*} string
     */
    static saveParams(number1, number2, oper) {
        //Write to file
        let data = number1 + "\n" + number2 + "\n" + oper;
        fs.writeFileSync("./src/models/input.txt", data); // W flag truncates
        return "Input File correctly written";
    }
}
