/* eslint-disable no-undef */
import { useEffect, useState } from 'react'

export function useLocalStorage (todosVersion, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(todosVersion)
        let parsedItem
        if (!localStorageItem) {
          localStorage.setItem(todosVersion, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }, 3000)
  })

  const savedItem = newTodos => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos)
      localStorage.setItem(todosVersion, stringifiedTodos)
      setItem(newTodos)
    } catch (error) {
      setError(error)
    }
  }

  return { item, savedItem, loading, error }
}
