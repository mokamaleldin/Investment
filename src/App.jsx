import Header from './components/Header';
import Fields from './components/Fileds';
import Result from './components/Result';
import React, { useState } from 'react';

function App() {
  const [userOutput, setUserOutput] = useState({
    investmentValue: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const inputIsValid = userOutput.duration >= 1;

  return (
    <main>
      <Header />
      <Fields userOutput={ userOutput } setUserOutput={ setUserOutput } />
      { !inputIsValid && <p className="center">Please enter a valid duration</p> }
      { inputIsValid && <Result userOutput={ userOutput } /> }
    </main>
  )
}

export default App
