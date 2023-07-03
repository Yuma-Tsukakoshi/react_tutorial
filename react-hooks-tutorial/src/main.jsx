import React , { createContext }from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const yumaInfo = {
  name: 'Yuma',
  age: 20,
}
// global変数化　createContext関数を使う
const yumaContext = createContext(yumaInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <yumaContext.Provider value = {yumaInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </yumaContext.Provider>
);

export default yumaContext;
