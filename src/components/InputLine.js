/*import React, { useState } from 'react';*/

const InputLine = ( {label,placeholder, userInput, setInput }) => {

    

    const handleChange = (e) => {
        setInput(e.currentTarget.value);
    }

    /*const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }*/
    return (
        <div>
            <label >{label}: </label>
            <input type="text" value={userInput}  onChange={handleChange} placeholder={placeholder}/>
        </div>
            
            
        
    );
};

export default InputLine;