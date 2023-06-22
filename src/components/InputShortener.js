import React, { useState } from 'react';

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    console.log(value);
    setValue("");
  };

  return (
    <div>
      <h1>Link <span>Shortener</span></h1>
      <input
        type="text"
        placeholder="Type URL here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Shorten it</button>
    </div>
  );
};

export default InputShortener;



