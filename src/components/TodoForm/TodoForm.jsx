import { useContext, useId, useState } from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoForm.css'

export function TodoForm () {
  const [newTodo, setnewTodo] = useState('')
  const idTxtArea = useId()
  const { addTodo, setOpenModal } = useContext(TodoContext)

  const onChange = (event) => {
    setnewTodo(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodo)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={idTxtArea}>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder='Hacer la cena'
        id={idTxtArea}
      />
      <div className='TodoForm-buttonContainer '>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >
          Añadir
        </button>
      </div>
    </form>
  )
}
