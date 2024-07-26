import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
function App() {

  // Todo stati oluşturduk. Başlangıç değeri boş bir array.
  const [todos, setTodos] = useState([]);

  // Todo Fonksiyonu tanımladık. Todo Oluşturma
  const createTodo = (newTodo) => {
    // Yeni bir dizi içerisinde önceki todoları aç, üzerine de bana gelen yeni todoları ekle.
    setTodos([...todos, newTodo]);
  }
  // Todo Silme Fonksiyonu
  const removeTodo = (todoId) => {
    // Toodolar üzerinde filter ile dön bu todoların idleri eşitse kenara koy.False dönenleri çıkart.
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }
  // Todo Güncelleme Fonksiyonu 
  // Yukarıdaki todosları map ile yakala. Yakalanan todoların idsi ile ekrandan girilen todonun id si eşit değilse aradığım todo değil bunu  return et. Eğer ki birbirlerine eşitse o zaman newTodoyu return et.
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos])
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
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
