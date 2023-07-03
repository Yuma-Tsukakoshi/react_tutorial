import './App.css';
import { useEffect, useState, useContext , useRef , useReducer } from 'react';
import yumaContext from './main';
import useLocalStorage from './useLocalStorage';


const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const yumaInfo = useContext(yumaContext);
  const ref = useRef();
  
  // reducerに対して通知を出していく(dispatch) 
  const [state, dispatch] = useReducer(reducer,0);

  const handleClick = () => {
    // この段階だと内部では値が変更されるがレンダリングされないためブラウザには反映されない⇒useStateを使う
    // setCount()関数で値を変更すると、内部でレンダリングが走る;
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('Hello Hooks');
  },[count]);
  // 第二引数にどのタイミングで実行するかを指定する
  // 空の配列を渡すとリロードのみ実行される⇒厳格モードだから2回実行されるテスト環境だと1回
  // 発火して欲しい状態変数を[]に入れると、その変数が変更された時に実行される

  const handleRef = () => {
    console.log(ref.current.value);
  }


  const [age, setAge] = useLocalStorage("age", 24);

  return (
      <div className='App'>
        <h1>UseState, UseEffect</h1>
        <button onClick={handleClick}>+</button>
        <p>{count}</p>
        <hr />
        <h1>useContext</h1>
        <p>{yumaInfo.name}</p>
        <p>{yumaInfo.age}</p>
        <hr />
        <h1>useRef</h1>
        <input type="text" ref={ref}/>
        <button onClick={handleRef}>UseRef</button>
        <hr />
        <h1>useReducer</h1>
        <p>count : {state}</p>
        <button onClick={()=>dispatch({type: "increment"})}>+</button>
        <button onClick={()=>dispatch({type: "decrement"})}>-</button>
        <hr />
        <h1>カスタムフック</h1>
        <p>{age}</p>
        <button onClick={() => setAge(80)}>年齢をセット</button>
      </div>
  )
}

export default App
