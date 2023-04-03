import './CreateTodoButton.css'
export function CreateTodoButton ({ setOpenModal }) {
  const OnclickButton = () => setOpenModal(prevState => !prevState)

  return (
    <>
      <button
        className='CreateTodoButton'
        onClick={OnclickButton}
      >
        +
      </button>
    </>
  )
}
