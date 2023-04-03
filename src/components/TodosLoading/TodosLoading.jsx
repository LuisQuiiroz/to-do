import './TodosLoading.css'
export function TodosLoading () {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon' />
      <p className='LoadingTodo-text'>Cargando TODOs...</p>
      <span className='LoadingTodo-deleteIcon' />
    </div>
  )
}
