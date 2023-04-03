
import { useContext } from 'react'
import './App.css'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoItem } from './components/TodoItem/TodoItem'
import { TodoList } from './components/TodoList/TodoList'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoContext } from './TodoContext/TodoContext'
import { Modal } from './components/Modal/Modal'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodosError } from './components/TodosError/TodosError'
import { TodosLoading } from './components/TodosLoading/TodosLoading'
import { EmptyTodos } from './components/EmptyTodos/EmptyTodos'

function App () {
  const { error, loading, searchedTodos, deleteTodo, toggleCompletedTodo, openModal, setOpenModal } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              todo={todo}
              deleteTodo={() => deleteTodo(todo.text)}
              toggleCompletedTodo={() => toggleCompletedTodo(todo.text)}
            />
          ))
        }
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export default App
