import { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffect = () => {
  const inputRef = useRef()
  useEffect(() => {
    // console.log("UseEffect");
    inputRef.current.value = "Tom"
  }, [])
  // 他會比useEffect早觸發
  useLayoutEffect(() => {
    // console.log("UseLayoutEffect");
    console.log(inputRef.current.value);
  }, [])
  return (
    <div>
      <fieldset>
        <legend>查看先後順序</legend>
        <input type="text" value="jack" readOnly ref={inputRef}/>
      </fieldset>
    </div>
  );
}

export default LayoutEffect;