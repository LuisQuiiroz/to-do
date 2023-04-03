import { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../../TodoContext/TodoContext'
export function TodoSearch () {
  const { search, setSearch } = useContext(TodoContext)
  const onSearchvalueChange = (event) => setSearch(event.target.value)
  return (
    <>
      <input
        className='TodoSearch'
        type='text'
        placeholder='Hacer la cena...'
        value={search}
        onChange={onSearchvalueChange}
      />
    </>
  )
}
