import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../TodoContext/TodoContext'
export function TodoCounter () {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <>
      <h2 className='TodoCounter'>Ha completado {completedTodos} de {totalTodos} TODOs</h2>
    </>
  )
}
