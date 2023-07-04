import React from 'react';
import './ImageGallery.css';


function ImageGallery({ fetchData }) {
  return (
    <div>
      {/* map関数の後波かっこにしがちだから気を付けて */}
      <div className='images-wrapper'>
        {fetchData.map((data) => (
          <div className='image' key={data.id}>
            <a href={data.pageURL} target="_blank">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
