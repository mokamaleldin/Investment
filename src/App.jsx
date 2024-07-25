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
  console.log("inside app", userOutput.duration);

  console.log(userOutput.duration);
  return (
    <main>
      <Header />
      <Fields userOutput={ userOutput } setUserOutput={ setUserOutput } />
      <Result userOutput={ userOutput } />
    </main>
  )
}

export default App
