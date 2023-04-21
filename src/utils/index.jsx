import React from 'react'

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
