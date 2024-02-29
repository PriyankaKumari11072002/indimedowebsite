import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchMedicineQuery = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const navigate = useNavigate()
  
    const handleSearch = (e)=>{
      e.preventDefault()
     if(query.length>3){
        // navigate(`/users/${query}`)
        navigate(`/product/search/${query}`)
      } 
     
    }

    
  return (
    <>

    <form  onClick={handleSearch}>
    <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search term"
      />
      <button type="submit">Search</button>
    </form>



    </>
  )
}

export default SearchMedicineQuery;