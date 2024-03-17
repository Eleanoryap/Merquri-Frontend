import React, { useState} from "react";
import '../../App.css' ;
import { FaSearch } from "react-icons/fa";

const Searchbar = ({onSearch}) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(search);
    };
return (
   <div className="container">
        <form className="top-bar" onSubmit={handleSearch}>
            <input type="text" 
            className="cityInput" 
            placeholder ="Search for City or Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="searchIcon"><FaSearch/>
                </button> 
               

        </form> 
        
    </div>
  
);

};

export default Searchbar;