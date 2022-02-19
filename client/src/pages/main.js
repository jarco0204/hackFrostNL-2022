// Another way to define a function component
const CalculatorPage  = () => {
    let APIURL = "http://localhost:8000";

   
    // }, []);
    return (<div>
        <h1>Hellow World, I will be connecting to {APIURL}</h1>
    </div>);
};

export default CalculatorPage;