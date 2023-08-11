import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
// 
import LinkResult from './LinkResult';
import InputShortener from './InputShortener';
function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener inputValue={setInputValue}/>
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
