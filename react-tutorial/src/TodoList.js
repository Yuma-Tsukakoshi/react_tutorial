import React from 'react'
import Todo from './Todo';

// TodoListコンポーネントを作成
const TodoList = ({ todos, toggleTodo }) => {
  // map関数：配列から一つ一つ取り出す
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
  // ユニークなキーを設定することで、Reactが変更を検知しやすくなる
};

// TodoListコンポーネントをエクスポート
export default TodoList
