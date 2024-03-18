import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SearchHistory = ({ searchHistory, onSearch, onDelete,theme }) => {
    const sortedHistory = [...searchHistory].reverse();
    const [listHeight, setListHeight] = useState(200); 
    useEffect(() => {
        const handleResize = () => {
          const windowHeight = window.innerHeight;
          setListHeight(windowHeight - 500); 
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
    <div className={`history-container ${theme}`}>
      <p className='history-title '>Search History</p>
      {sortedHistory.length === 0 ? (
        <p className='no-records'>No Records</p>
      ) : ( 
      <ul className="search-history-list" style={{ maxHeight: listHeight, overflowY: 'auto'}}>
        {sortedHistory.map((item, index) => (
            <li className={`history-item ${theme}`} key={item.id}>
                <div className="left-content">
                <span className='history-name'>{item.info}</span>
                </div>
                <div className="right-content">
                <span >{item.time}</span>
            
            
                <button className={`history-buttons ${theme}`} onClick={() => onSearch(item.info)}><FaSearch/></button>
                <button className={`history-buttons ${theme}`} onClick={() => onDelete(item.id)}><MdDelete /></button>
                </div>
            </li>
            ))}
      </ul>
      )}
    </div>
  );
};

export default SearchHistory;