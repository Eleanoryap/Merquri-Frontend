import React, { useState} from "react";
import '../../App.css' ;
import { FaSearch } from "react-icons/fa";

const Searchbar = ({onSearch, theme}) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(search);
    };
return (
   <div  className={`container ${theme}`}>
        <form className="top-bar" onSubmit={handleSearch}>
            <input type="text" 
            className={`cityInput ${theme}`}
            placeholder ="Search for City or Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button  type="submit" className={`searchIcon ${theme}`}><FaSearch/>
                </button> 
               

        </form> 
        
    </div>
  
);

};

export default Searchbar;