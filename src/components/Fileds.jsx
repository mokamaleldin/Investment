import React, { useState } from 'react';
export default function Fields({ userOutput, setUserOutput }) {
    function handleChange(inputIdentifire, newValue) {
        setUserOutput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifire]: +newValue
            };
        });
    }
    return (
        <form id="user-input" >

            <div className="input-group ">
                <p>
                    <label>Initial Investment</label>
                    <input required type="number" value={ userOutput.investmentValue } onChange={ (event) => handleChange('investmentValue', event.target.value) } />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input required type="number" value={ userOutput.annualInvestment } onChange={ (event) => handleChange('annualInvestment', event.target.value) } />
                </p>
            </div>

            <div className="input-group ">
                <p>
                    <label>Expected Return</label>
                    <input required type="number" value={ userOutput.expectedReturn } onChange={ (event) => handleChange('expectedReturn', event.target.value) } />
                </p>
                <p>
                    <label>Duration</label>
                    <input required type="number" value={ userOutput.duration } onChange={ (event) => handleChange('duration', event.target.value) } />
                </p>
            </div>
        </form>
    )
}