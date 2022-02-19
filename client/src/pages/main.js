import './main.css';

// Another way to define a function component
const CalculatorPage  = () => {
    // let APIURL = "http://localhost:8000";

   
    return (<div className='center'>
        <h1>Welcome to Nuclear Calculator!</h1>
        <div className='inputs'>
            <div>
                <h3>Number 1:</h3>
                <input type="number" name='number1'/>
            </div>
            <div>
                <h3>Number 2: </h3>
                <input type="number" name='number2'/>
            </div> 
        </div>
        <div className='operation'>
            <div>
                <input type="radio" value="add" name="operation" /> Add
            </div>
            <div>
                <input type="radio" value="subtraction" name="operation" /> Subtraction
            </div>
            <div>
                <input type="radio" value="multiplication" name="operation" /> Multiplication
            </div>
            <div>   
                <input type="radio" value="dvision" name="operation" /> Division
            </div>
        </div>
        <div className="buttons">
            <div>
                <button id="button1" type="button">POST Inputs to Server</button>
            </div>
            <div>
                <button id="button2" type="button">GET Output</button>
            </div>
        </div>
    </div>);
};

export default CalculatorPage;