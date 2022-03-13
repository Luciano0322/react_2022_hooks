import { createContext, useState } from "react";
import Level2 from "../components/Level2";

export const ExpContext = createContext(null);

const ContextTutorial = () => {
  // 這裡借用之前 level 2 的範例講解，我用另外的component去裝填會比較容易懂
  const [nativeForm, setNativeForm] = useState({
    user: '',
    pwd: ''
  })
  return (
    <ExpContext.Provider value={{nativeForm, setNativeForm}}>
      {/* 可以減少 props，更常用於搭配reducer hook 來實現類似redux的做法 */}
      <Level2/>
    </ExpContext.Provider>
  )
}

export default ContextTutorial;