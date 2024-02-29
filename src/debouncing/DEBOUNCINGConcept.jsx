import React, { useEffect ,useState} from 'react'

const DEBOUNCINGConcept = () => {
    const [query, setQuery] = useState(''); 
    const [api, setApi] = useState([]); 

function handleChange(e){
    setQuery(e.target.value)

  
}

useEffect(()=>{
    setTimeout(()=>{
      
      fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
          .then(response => response.json())
          .then(json => setApi(json))
          .catch((error) => console.error('Error fetching data:', error));
          console.log(query,api,'value')
      
        },1000)

   
},[query])
  return (
    <>
         <input
        type="text"
        value={query}
        onChange={handleChange}
       
        placeholder="Enter search term"
      />
    
    </>
  )
}

export default DEBOUNCINGConcept