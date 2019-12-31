import React from 'react';

import './search-box_styles.css';

//functional component - is just a function with some parameters that returns some html unlike the class
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} />
);


//above we are making it a reusable component
//old way of doing when it was just in teh app.js file
//<input 
        //type='search' 
       // placeholder='search monsters' 
        //onChange={e => this.setState({searchField: e.target.value})} />