import { useCallback, useEffect, useState } from "react"

const useAsync = (callback, dependencies = []) => {
  // 基本概念和邏輯和之前的useFetch hook是一致的，但可應用於client內部的promise。
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [value, setValue] = useState()
  
  const callbackMemorized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemorized()
  }, [callbackMemorized])

  return { loading, error, value }
}

export default useAsync;