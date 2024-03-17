import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SearchHistory = ({ searchHistory, onSearch, onDelete }) => {
    const sortedHistory = [...searchHistory].reverse();
    const [listHeight, setListHeight] = useState(200); 
    useEffect(() => {
        const handleResize = () => {
          // Update the height of the list container based on the window height
          const windowHeight = window.innerHeight;
          setListHeight(windowHeight - 500); // Set a margin from the bottom of the window
        };
    
        // Call handleResize initially and add a resize event listener
        handleResize();
        window.addEventListener('resize', handleResize);
    
        // Remove the resize event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
    <div className='history-container'>
      <p className='history-title '>Search History</p>
      {sortedHistory.length === 0 ? (
        <p className='no-records'>No Records</p>
      ) : ( 
      <ul className="search-history-list" style={{ maxHeight: listHeight, overflowY: 'auto'}}>
        {sortedHistory.map((item, index) => (
            <li className='history-item' key={item.id}>
                <div className="left-content">
                <span className='history-name'>{item.info}</span>
                </div>
                <div className="right-content">
                <span className="history-time">{item.time}</span>
            
            
                <button className="history-buttons" onClick={() => onSearch(item.info)}><FaSearch/></button>
                <button className="history-buttons" onClick={() => onDelete(item.id)}><MdDelete /></button>
                </div>
            </li>
            ))}
      </ul>
      )}
    </div>
  );
};

export default SearchHistory;