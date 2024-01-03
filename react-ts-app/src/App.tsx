import React, { useState } from 'react';
import TodoList from './compnents/TodoList';
import NewTodo from './compnents/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodo => [...prevTodo, {id: Math.random().toString(), text: text}]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };

  return (
    <div className="App">
      <NewTodo onAddTodo = {todoAddHandler} />
      <TodoList items = {todos} onDeleteTodo = {todoDeleteHandler} />
    </div>
  );
}

export default App;
