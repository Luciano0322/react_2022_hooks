import { useState } from "react";
import Button from "../components/Button";
import useArray from "../hooks/useArray";
import useDebounce from "../hooks/useDebounce";
import usePages from "../hooks/usePages";
import usePrevious from "../hooks/usePrevious";
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

  // useArray
  const { array, set: setUseArr, push, filter, update, remove, clear: clearArray  } = useArray(['A', 'B', 'C', 'D'])

  // usePrevious
  const [count2, setCount2] = useState(0)
  const previousCount2 = usePrevious(count2)

  // usePages
  const pages = [1,2,3,4,5,6,7,8,9,10,11,12];
  const {pageData, totalPages} = usePages(pages)
  
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
      <div>
        <h1>useArray</h1>
        <p>{array.join(', ')}</p>
        <Button p={`1rem`} onClick={() => push("F")}>加一個F</Button>
        <Button p={`1rem`} onClick={() => update(2, "Cat")}>修改第三個</Button>
        <Button p={`1rem`} onClick={() => remove(1)}>刪除第二個</Button>
        <Button p={`1rem`} onClick={() => filter(e => e !== 'F')}>去除所有的F</Button>
        <Button p={`1rem`} onClick={() => setUseArr(['X', 'Y', 'Z'])}>設成X,Y,Z</Button>
        <Button p={`1rem`} onClick={clearArray}>清空</Button>
      </div>
      <div>
        <h1>usePrevious</h1>
        <p>{`現值-${count2}，前值-${previousCount2} `}</p>
        <Button p={`1rem`} onClick={() => setCount2(prev => prev + 1)}>++</Button>
      </div>
    </div>
  )
}

export default CustomHook;