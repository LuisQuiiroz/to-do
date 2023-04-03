import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext()

export function TodoProvider ({ children }) {
  const { item: todos, savedItem: savedTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!search.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    savedTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const deletedTodo = todos.filter(todo => todo.text !== text)
    savedTodos(deletedTodo)
  }

  const toggleCompletedTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    savedTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      search,
      setSearch,
      searchedTodos,
      toggleCompletedTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}
    >,
      {children}
    </TodoContext.Provider>
  )
}
