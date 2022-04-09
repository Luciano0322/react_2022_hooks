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
    setArray(prev => [
      ...prev.slice(0, index),
      newElement,
      ...prev.slice(index + 1, prev.length - 1),
    ])
  }

  const remove = (index) => {
    setArray(prev => {
      prev.splice(index, 1)
      return [...prev];
    })
  }

  const clear = () => {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}

export default useArray;