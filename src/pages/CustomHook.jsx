import { useState } from "react";
import Button from "../components/Button";
import useTimout from "../hooks/useTimeout";
import useToggle from "../hooks/useToggle";

const CustomHook = () => {
  // useToggle
  const [toggle, setToggle] = useToggle(false)
  // useTimeout
  const [count, setCount] = useState(10)
  const { reset, clear } = useTimout(() => setCount(0), 1000)
  return (
    <div>
      <div>
        <h1>useToggle</h1>
        <p>{toggle.toString()}</p>
        <Button p={`1rem`} onClick={setToggle}>toggle</Button>
        <Button p={`1rem`} onClick={() => setToggle(true)}>open</Button>
        <Button p={`1rem`} onClick={() => setToggle(false)}>close</Button>
      </div>
      <div>
        <h1>useTimout</h1>
        <p>{count}</p>
        <Button p={`1rem`} onClick={() => setCount(prev => prev + 1)}>++</Button>
        <Button p={`1rem`} onClick={clear}>clear</Button>
        <Button p={`1rem`} onClick={reset}>reset</Button>
      </div>
    </div>
  )
}

export default CustomHook;