import { useEffect } from "react"
import useTimout from "./useTimeout"

// 等待動作停止後，觸發其他function，適合用於query api
const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  // 這裡不希望一開始就觸發callback，所以加了一個clear
  useEffect(clear, [])
}

export default useDebounce;