import { useState } from "react";
import Button from "../components/Button";
import useDebounce from "../hooks/useDebounce";
import useTimout from "../hooks/useTimeout";
import useToggle from "../hooks/useToggle";
import useUpdateEffect from "../hooks/useUpdateEffect";

const CustomHook = () => {
  // useToggle
  const [toggle, setToggle] = useToggle(false)
  
  // useTimeout
  const [count, setCount] = useState(10)
  const { reset, clear } = useTimout(() => setCount(0), 1000)
  
  // useDebounce
  const [dCount, setDCount] = useState(5)
  // 這裡的 alert 可以換成其他的動作
  useDebounce(() => alert(dCount), 1000, [dCount])

  // useUpdateEffect
  const [count1, setCount1] = useState(10)
  useUpdateEffect(() => alert(count1), [count1])

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
      <div>
        <h1>useDebounce</h1>
        <p>{dCount}</p>
        <Button p={`1rem`} onClick={() => setDCount(prev => prev + 1)}>++</Button>
      </div>
      <div>
        <h1>useUpdateEffect</h1>
        <p>{count1}</p>
        <Button p={`1rem`} onClick={() => setCount1(prev => prev + 1)}>++</Button>
      </div>
      
    </div>
  )
}

export default CustomHook;