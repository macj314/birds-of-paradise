import React from 'react'

const SearchBar = ({keyword,setKeyword}) => {
    return (
        <div class="search-bar">
            <input 
            key="random1"
            value={keyword}
            placeholder={"county"}
            onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    );
  }
  
  export default SearchBar