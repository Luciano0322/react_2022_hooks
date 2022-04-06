import { useState } from "react";

const useToggle = (defaultValue) => {
  // 傳入 default value 覆蓋初始值
  const [value, setValue] = useState(defaultValue)
  const toggleValue = (value) => {
    setValue(prev => 
      typeof value === "boolean" ? value : !prev  
    )
  }
  return [value, toggleValue];
}

export default useToggle;