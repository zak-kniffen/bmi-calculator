import React, { useState } from 'react';
import InputLine from "./InputLine";

const InputForm = () => {

    const [ weightInput, setWeightInput ] = useState('');
    const [ heightInput, setHeightInput ] = useState('');



    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <form style={{margin: 'auto', width:"50%"}}onSubmit={handleSubmit}>
            <InputLine setInput={setWeightInput} userInput={weightInput} label={"Weight in kg's"} placeholder={"Enter weight"}/>
            <InputLine setInput={setHeightInput} userInput={heightInput} label={"Height in meters"} placeholder={"Enter height"}/>
            <button>Submit</button>
        </form>
    );
};

export default InputForm;