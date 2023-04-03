import './TodoItem.css'
export function TodoItem ({ todo, deleteTodo, toggleCompletedTodo }) {
  const { text, completed } = todo
  return (
    <>
      <li className='TodoItem'>
        <span
          className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
          onClick={toggleCompletedTodo}
        >
          √
        </span>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>

          {text}
        </p>
        <span
          className='Icon Icon-delete'
          onClick={deleteTodo}
        >
          X
        </span>
      </li>
    </>
  )
}
