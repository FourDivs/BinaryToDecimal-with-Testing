import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [bcdValue, setBcdValue] = useState('');
  const [decimalValue, setdecimalValue] = useState('');

  const handleBCDChange = (event) => {
    setBcdValue(event.target.value);
    setdecimalValue(convertBCDToDecimal(event.target.value));
  }

  const handleDecimalChange = (event) => {
    setdecimalValue(event.target.value);
    setBcdValue(convertDecimalToBCD(event.target.value));
  }

  //convert BCD to decimal
  const convertBCDToDecimal = (bcdValue) => {
    return parseInt(bcdValue, 2).toString(10);
  }

  const convertDecimalToBCD = (decimalValue) => {
    return parseInt(decimalValue).toString(2);
  }
  //convert decimal to binary

  return (
    <div>
      <h1>Binary to Decimal Converter</h1>
      <label htmlFor="bcd">Binary:</label>
      <input id="bcd" data-testid='binary-input' type="text" value={bcdValue} onChange={handleBCDChange}></input>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor="deci">Decimal:</label>
      <input data-testid='deci-input' id="deci" type="text" value={decimalValue} onChange={handleDecimalChange}></input>
    </div>
  )
}

export default App;
