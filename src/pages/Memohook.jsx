import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const Memohook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Any")
    .then((res)=>{
      setData(res.data)
    })
  },[])

  const pickLongestWord = (str) => {
    if(!str) return null;
    const strArr = str.split(" ")
    const strLengths = strArr.map(e => e.length)
    let maxLength = Math.max(...strLengths)
    console.log("this is computed");
    return maxLength;
  }

  // 效能問題，從這範例看來通過toggle change會間接影響到state change的值而造成重複渲染問題。
  // 透過useMemo hook可以讓自定義的function不會重新跑一次。

  const longestWorld = useMemo(() => pickLongestWord(data?.setup), [data])

  return (
    <div>
      <h2>memohook</h2>
      <h5>{data?.setup}</h5>
      {/* <span>{pickLongestWord(data?.setup)}</span> */}
      <span>{longestWorld}</span>
      <button
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      <p>
        {toggle && "toggle on"}
      </p>
    </div>
  )
}

export default Memohook