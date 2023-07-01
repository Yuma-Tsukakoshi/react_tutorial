import React , { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  // Todoの空の配列での型をTodoで定義する
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(e.target.value);
    e.preventDefault();
    setInputText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // エンターキーを押してもリロードされないようにする
    e.preventDefault();

    if (!inputText) {
      return;
    }

    // 新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputText,
      id: todos.length,
      checked : false,
    };

    // スプレッド構文
    setTodos([newTodo, ...todos]);
    // 投稿した後にinputの中身を空にする
    setInputText(inputText);
  }

  // 型の宣言をしないとエラーが出る
  const handleEdit = (id: number ,inputValue:string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChecked = (id: number, checked:boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            type="text" 
            onChange={(e) => handleChange(e)} 
            className="inputText"
          />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map( (todo) => (
            <li key={todo.id}>
              <input 
                type="text" 
                value={todo.inputValue}
                onChange={(e) => handleEdit(todo.id, e.target.value)} 
                disabled={todo.checked}
              />
              <input 
                type="checkbox" 
                checked={todo.checked}
                onChange={(e) => handleChecked(todo.id, todo.checked)} 
              />
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
