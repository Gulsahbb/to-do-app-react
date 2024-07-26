import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
function App() {

  // Todo stati oluşturduk. Başlangıç değeri boş bir array
  const [todos, setTodos] = useState([]);

  // Todo Fonksiyonu tanımladık. Todo Oluşturma
  const createTodo = (newTodo) => {
    // Yeni bir dizi içerisinde önceki todoları aç, üzerine de bana gelen yeni todoları ekle
    setTodos([...todos, newTodo]);
  }
  console.log(todos);
  return (
    <div className='App'>
      <div className='App-todo'>
        {/* TodoCreate'ten App componentine geçiş yapmamız lazım. !!! : Child'tan Parent'ta props geçme Yöntemi 
        # Props ismi = {fonksiyon}
        */}
        {/* TODO Oluşturmak için */}
        <TodoCreate onCreateTodo={createTodo} />
        {/* TODO Listelemek için */}
        {/* Todo statini TodoList componentine prop geçtik.*/}
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
