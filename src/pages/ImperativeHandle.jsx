import { useRef } from "react";
import BtnImperative from "../components/BtnImperative";

const ImperativeHandle = () => {
  const btnRef = useRef(null)
  return (
    <div>
      <button onClick={() => {
        btnRef.current.alterToggle();
      }}>
        Btn parent
      </button>
      <BtnImperative ref={btnRef} />
    </div>
  )
}

export default ImperativeHandle;