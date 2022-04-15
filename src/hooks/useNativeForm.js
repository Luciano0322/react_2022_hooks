import { useState } from "react"

const useNativeForm = (values) => {
  // 先另立一個form state 的 object
  const [state, setState] = useState(values || {});
  // const formRef = useRef({});
  // 基礎的塞入方法，當input form 的 name 有對應到的時候就可改變該狀態
  // 如果對象為checkbox || radio 的時候需要另外處理
  const handleChange = e => {
    setState(state => ({ ...state, [e.target.name]: e.target.value }));
    // formRef.current = { ...formRef.current, [e.target.name]: e.target.value };
    
  }
  return [state, handleChange];
}

export default useNativeForm;