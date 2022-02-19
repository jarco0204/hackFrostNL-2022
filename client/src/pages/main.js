import { useState } from "react";
import axios from "axios";


import './main.css';

// Another way to define a function component
const CalculatorPage  = () => {

    //Hooks
    const [number1Input, setNumber1Input] = useState(0);
    const [number2Input, setNumber2Input] = useState(0);
    const [operationInput, setOperationInput] = useState("");
    const [answer, setAnswer] = useState("");



    let APIURL = "http://localhost:8000/example/test";

    // HANDLERS
    const sendData = () =>{
        console.log(number1Input,number2Input, operationInput)
        axios({
            method:"POST",
            url: APIURL,
            data:{
                var1: number1Input,
                var2: number2Input,
                operation: operationInput
            }
        });
        console.log("successfully sent")
        
    }

    const getData = () =>{
        
        axios({
            method: 'get',
            url: APIURL,
            headers: {},
            data:{
                message:"hellow"
            }
        }).then(resp =>{
            // setAnswer()
            console.log(resp.data.result);
            setAnswer(resp.data.result)
        })
    }

    const handleInputChange = (event) => {
        if (event.target.id === "number1") {
            setNumber1Input(event.target.value);
        } else if (event.target.id === "number2") {
            setNumber2Input(event.target.value);
        }
        
    };
    const handleOperationChange = (event) =>{
        setOperationInput(event.target.value)
        // console.log(event.target.value)
    }

   // Actual Component
    return (<div className='center'>
        <h1>Welcome to Nuclear Calculator!</h1>
        <div className='inputs'>
            <div>
                <h3>Number 1:</h3>
                <input type="number" id="number1" name='number1' value={number1Input} onChange={handleInputChange}/>
            </div>
            <div>
                <h3>Number 2: </h3>
                <input type="number" id="number2" name='number2' value={number2Input} onChange={handleInputChange}/>
            </div> 
        </div>
        <div className='operation' onChange={handleOperationChange}>
            <div>
                <input type="radio" value="add" name="operation" /> Add
            </div>
            <div>
                <input type="radio" value="subtraction" name="operation" /> Subtraction
            </div>
            <div>
                <input type="radio" value="multiplication" name="operation"   /> Multiplication
            </div>
            <div>   
                <input type="radio" value="division" name="operation"  /> Division
            </div>
        </div>
        <div className="buttons">
            <div>
                <button id="button1" type="button" onClick={sendData}>POST Inputs to Server</button>
            </div>
            <div>
                <button id="button2" type="button" onClick={getData}>GET Output</button>
            </div>
        </div>
        <h3>Result:</h3>
        <p>{answer}</p>

    </div>
    
    );
};

export default CalculatorPage;