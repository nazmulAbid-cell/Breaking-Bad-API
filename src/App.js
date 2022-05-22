import React, { useEffect, useState } from 'react'
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.css'



function App() {
  const [items, setItems] =useState([])
  const [isLoading, setIsLoding] =useState(true)
  const [query, setQuery] =useState('')
  useEffect(() =>{
    const fetchItems = async () =>{
      const response  = await axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(response.data)
      setItems(response.data)
      setIsLoding(false)
    }

    fetchItems()
     
  },[query])


  
 return(
   <div className='container'> 
      <Header />
      <Search  getQuery ={(q) =>setQuery(q)}/>
      <CharacterGrid  isLoading={isLoading} items={items}/>
   </div>
   


 )
}

export default App;
