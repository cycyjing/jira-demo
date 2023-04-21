import React, { useEffect, useState } from 'react'

export const isFalsy = (value) => value === 0 ? false : !value

export const cleanObject = (object) => {
  // not change 'object' itself, it will affect other places which use it.
  const result = {...object}
  Object.keys(result).forEach((key) => {
    const value = result[key]
    // value = 0, this is a value we need!!!
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  },[])
}

export const useDebounce = (value, delay) => {
  const [debounceValue,setDebounceValue] = useState(value)
	useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value),delay)
    return () => clearTimeout(timeout)
  },[value, delay])
  return debounceValue
}