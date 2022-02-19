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
    static async performOperation() {
        let file = "./src/models/input.txt";
        // Check that the file exists locally
        if (!fs.existsSync(file)) {
            console.log("File not found, call post first");
            return;
        }

        let data = fs.readFileSync(file, "utf-8").split("\n");
        data[0] = parseInt(data[0]);
        data[1] = parseInt(data[1]);

        // console.log(data);

        //Do operation
        if (data[2] == "add") {
            return data[0] + data[1];
        } else if (data[2] == "subtraction") {
            return data[0] - data[1];
        } else if (data[2] == "multiplication") {
            return data[0] * data[1];
        } else if (data[2] == "dvision") {
            return data[0] / data[1];
        } else {
            console.log("error wrong operation");
            return;
        }
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
