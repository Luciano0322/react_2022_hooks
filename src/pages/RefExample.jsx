import { useRef } from "react";

const RefExample = () => {
  // 你可以想像他為useState的進階用法，
  // 用它來處理表單的好處就是能夠有效控制重複拿取state的問題，
  // 可以優化react的運行。
  const inputRef = useRef(null);
  // react-hook-form 就是用此種方式在處理表單。
  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus(); // focus on input 
    // inputRef.current.value = ""; // input reset
  };
  return (
    <div>
      <fieldset>
        <legend>ref 範例</legend>
        <input type="text" placeholder="..." ref={inputRef}/>
        <button onClick={onClick}>focus on input</button>
      </fieldset>
    </div>
  )
} 

export default RefExample;