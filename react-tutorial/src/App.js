import './App.css';
import { useState , useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

function App() {
  // useStateはReactのフックで状態を管理する　変数の更新が行われた時に発火
  // todos: これから作成するタスク 
  const [todos, setTodos] = useState([]);


  const toggleTodo = (id) => {
    // todosは状態変数を保管する場所であるが変更すると不具合を生じる
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    // あってるオブジェクトだけ取得する
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  //TODO useRef(): 使い道は?
  const todoNameRef = useRef();

    const hundleAddTodo = (e) => {
    // タスクを追加する
    const name = todoNameRef.current.value;
    if (name ==='') return;
    setTodos((prevTodos) => {
      // objectによるスプレッド構文を利用することで可変長の配列を挿入可能！
      return [...prevTodos, {id:uuidv4(), name:name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  const hundleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    // <>空のタグはjsxフラグメントという<div>でもよい
    <>
      {/* todosというpropを使って、todosという変数に渡している */}
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={hundleAddTodo}>タスク追加</button>
      <button onClick={hundleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo)=>!todo.completed).length}</div>
    </>
  );
}

export default App
