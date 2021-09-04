import React, { useState } from 'react';
import './App.scss';
import TodoItem from './components/TodoItem/TodoItem';
import { Todo } from './shared/todo';

const todos: Todo[] = [
  {text: 'Todo 1', done:false},
  {text: 'Todo 2', done:false},
  {text: 'Todo 2', done:false},
];

function App() {
  const [todoList, setTodoList] = useState(todos);
 
  const toggleTodo = (selectedTodo:Todo) => {
    const newTodos = todoList.map(todo => {
      if(todo === selectedTodo){
        return{
          ...todo,
          done:!todo.done
        };
      }
      return todo;
    });
    setTodoList(newTodos);
  } 
  return (
    <div className="App">
      {
        todoList.map((todo) => (<TodoItem todo={todo} toggleTodo ={toggleTodo} />))
      }
    </div>
  );
}

export default App;
