import { useCallback, useEffect, useRef } from "react";

const useTimout = (callback, delay) => {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()
  // 透過 ref change 條件觸發更新事件
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])
  // 透過 useCallback 減少重複 setTimeout 
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  // 這裡是主要的作用 hook 主要做值更改的部分，在更動完後清除timeout
  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  // 如果不用 clear, reset function 也可以不定義
  return { clear, reset }
}

export default useTimout;