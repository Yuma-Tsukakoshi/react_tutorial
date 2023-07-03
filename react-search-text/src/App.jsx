import { useState , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  // filter後のデータを格納する
  const [searchQuery,setSearchQuery] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data));
  }, []);

  const handleSearch = () => {
    // console.log(ref.current.value);
    setSearchQuery(
      users.filter((user) => 
      // includes: 文字列が含まれているかどうかを判定する　⇒　含まれている要素だけ残す
      user.name.toLowerCase().includes(ref.current.value)
      )
    );
  };

  return (
      <div className='App'>
        <div className="main">
          <h2>検索アプリ</h2>
          <input type="text"  ref={ref}  onChange ={()=> handleSearch()} />
          <dov className="content">
            {searchQuery.map((user)=>(
              <div className="box" key={user.id}>
                <h3>{user.name}</h3>
                <hr />
                <p>{user.email}</p>
              </div>
            ))}
          </dov>
        </div>
      </div>
  )
}

export default App
