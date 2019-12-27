import React from 'react';

import './search-box.styles.css';

const SearchBox = ({placeholder, handleChange}) => {
    return ( <input 
        type="search" 
        placeholder={placeholder || "Type Keywords"}
        className={'search'}
        onChange={handleChange}         
        /> );
}
 
export default SearchBox;