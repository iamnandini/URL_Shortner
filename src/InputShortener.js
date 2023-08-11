import { useState } from "react";
import './App.css'; 

const InputShortener = ({ inputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    inputValue(value);
    setValue("");
  }

  return (
    <div className="inputcontainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  )
}
export default InputShortener;