import React ,{ useState } from 'react';
import './Pagination.css';
import AlbumList from './AlbumList';
import Album from './type';
import ReactPaginate from 'react-paginate';

type Props = {
  albums: Album[];
}

function pagination(props: Props) {
  const { albums } = props;

  const [itemsOffset, setItemsOffset] = useState(0);

  const itemPerPage = 6;

  const endOffset = itemsOffset + itemPerPage;

  const currentAlbums = albums.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemPerPage);

  const handlePageClick = (e: { selected: number }) => {
    // console.log(e.selected);
    const newOffset = (e.selected * itemPerPage) % albums.length;
    setItemsOffset(newOffset);
  }

  return (
    <div className = "albumWrapper">
      <AlbumList albums = { albums } currentAlbums={currentAlbums}/>
      <div className='paginateWrapper'>

      <ReactPaginate 
      previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        activeClassName="active"
        onPageChange = {handlePageClick} />
      </div>
    </div>
  )
}

export default pagination
