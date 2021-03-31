import React, { useState } from 'react';
import InputLine from "./InputLine";


const InputForm = () => {

    const [ weightInput, setWeightInput ] = useState('');
    const [ heightInput, setHeightInput ] = useState('');

    const handleChange = (e) => {
        
    }

    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <form style={{margin: 'auto', width:"50%"}}onSubmit={handleSubmit}>
            <InputLine setUserInput={setWeightInput} userInput={weightInput} label={"Weight in lb's"} placeholder={"Enter weight"}/>
            <InputLine setUserInput={setHeightInput} userInput={heightInput} label={"Height in inches"} placeholder={"Enter height"}/>
            <h3>BMI = {"No Data" | Math.round(Number(weightInput/2.20462)/(((heightInput * 0.0254) * (heightInput * 0.0254))))}</h3>
        </form>
    );
};

export default InputForm;