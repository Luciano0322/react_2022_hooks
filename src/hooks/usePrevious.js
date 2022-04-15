import { useRef } from "react"

const usePrevious = (value) => {
  const currentRef = useRef(value)
  const previousRef = useRef()
  if(currentRef.current !== value) {
    // 保存之前的值
    previousRef.current = currentRef.current
    // 寫入現在的值
    currentRef.current = value
  }
  return previousRef.current;
}

export default usePrevious;