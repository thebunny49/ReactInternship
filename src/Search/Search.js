import React from 'react';


export const SearchBox = ({placeholder, handleChange}) =>(
    
    <form className="form-inline search my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder={placeholder} onChange={handleChange} aria-label="Search" />
      
    </form>
)