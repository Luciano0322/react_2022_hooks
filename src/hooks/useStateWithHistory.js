import { useCallback, useRef, useState } from "react"

const useStateWithHistory = (defaultValue, { capacity = 10 } = {}) => {
  const [ value, setValue ] = useState(defaultValue)
  const historyRef = useRef([value])
  const pointerRef = useRef(0)

  const set = useCallback((e) => {
    const resolvedValue = typeof e === 'function' ? e(value) : e
    if(historyRef.current[pointerRef.current] !== resolvedValue) {
      // 去除返回後下一步的資料 
      if(pointerRef.current < historyRef.current.length - 1){
        historyRef.current.splice(pointerRef.current + 1)
      }
      historyRef.current.push(resolvedValue)
      while(historyRef.current.length > capacity) {
        historyRef.current.shift()
      }
      pointerRef.current = historyRef.current.length - 1
    }
    setValue(resolvedValue)
  }, [capacity, value])
  
  const back = useCallback(() => {
    // 排除第一項情況
    if(pointerRef.current <= 0) return
    pointerRef.current--
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const forward = useCallback(() => {
    // 排除最尾項情況
    if(pointerRef.current >= historyRef.current.length - 1) return
    pointerRef.current++
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const go = useCallback((index) => {
    if(index < 0 || index >= historyRef.current.length - 1) return
    pointerRef.current = index
    setValue(historyRef.current[pointerRef.current])
  }, [])

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    }
  ]
}

export default useStateWithHistory;