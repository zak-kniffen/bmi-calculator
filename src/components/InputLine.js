/*import React, { useState } from 'react';*/

const InputLine = ( {label,placeholder, userInput, setUserInput}) => {

    const myChange = (e) => {
        setUserInput(e.target.value);
    }


    return (
        <div>
            <label >{label}: </label>
            <input data-testid="myTestInput" value={userInput} type="number" onChange={myChange}   placeholder={placeholder}/>
        </div>
            
            
        
    );
};

export default InputLine;