import { useState } from "react"

const useArray = (defaultValue) => {
  const [array, setArray] =useState(defaultValue)
  
  const push = (element) => {
    setArray(prev => [...prev, element])
  }

  const filter = (callback) => {
    setArray(prev => prev.filter(callback))
  }

  const update = (index, newElement) => {
    // 這裡其實也可以直接用splice的方法從外部帶入，exp: remove function, 但我保留其不同作法以供參考，也可以練習兩種不同做法。
    setArray(prev => [
      ...prev.slice(0, index),
      newElement,
      ...prev.slice(index + 1, prev.length - 1),
    ])
  }

  const remove = (index) => {
    array.splice(index, 1)
    setArray([...array])
  }

  const clear = () => {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}

export default useArray;