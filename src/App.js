import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import { Analytics } from '@vercel/analytics/react';

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
      <Analytics />

    </div>
  );
}

export default App;
