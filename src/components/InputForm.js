import React, { useState } from 'react';
import InputLine from "./InputLine";


const InputForm = () => {

    const [ weightInput, setWeightInput ] = useState('');
    const [ feetInput, setFeetInput ] = useState('');
    const [ inchesInput, setInchesInput ] = useState('');
    const BMI_calculation = (Math.round(  (weightInput/2.20462)  / (  (((feetInput * 12) + Number(inchesInput)) * 0.0254) * (((feetInput * 12) + Number(inchesInput)) * 0.0254) )   * 100))/100;

    const handleChange = (e) => {
        
    }

    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <form style={{margin: 'auto', width:"75%"}}onSubmit={handleSubmit}>
            <InputLine setUserInput={setWeightInput} userInput={weightInput} label={"Weight in lbs"} placeholder={"Enter weight"}/>
            <InputLine setUserInput={setFeetInput} userInput={feetInput} label={"Height in feet"} placeholder={"Enter height"}/>
            <InputLine setUserInput={setInchesInput} userInput={inchesInput} label={"...and inches"} placeholder={"Enter height"}/>
            <h3>BMI = {isFinite(BMI_calculation) ? BMI_calculation : 0}

            </h3>
        </form>
    );
};

export default InputForm;