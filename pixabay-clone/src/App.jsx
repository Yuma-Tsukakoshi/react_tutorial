import { useState , useRef } from 'react'
import './App.css'
import ImageGallery from './ImageGallery'

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // APIをURL
    const endpointURL = `https://pixabay.com/api/?key=38051824-dd8451ba5d7d54bb488c5daf0&q=${ref.current.value}` 
    // APIを叩く
      fetch(endpointURL)
      .then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <>
      <div className='container'>
        <h2>My Pixabay</h2>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='画像を探す' ref = {ref}/>
        </form>
        {/* 一文字消してtab補完するとImageGallery入る */}
        <ImageGallery fetchData={fetchData} />
      </div>
    </>
  )
}

export default App
