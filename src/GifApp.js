import { useState } from "react"
import { SearchContext } from "./components/context/SearchContext";
import MainContainer from "./components/gif/MainContainer";
import Header from "./components/header/Header"
import { useCounter } from "./hooks/useCounter";

const GifApp = () => {

  const lastSearch = localStorage.getItem('busqueda') ?? '';

  const [search, setSearch] = useState(lastSearch);

  const [counter, setCounter, increment, decrement] = useCounter(1);

  return (
    <div className="gif-app">
        <SearchContext.Provider value={{
          search,
          setSearch,
          counter,
          setCounter,
          increment,
          decrement,
        }}> 
          <Header />
          <MainContainer search = { search }/>
        </SearchContext.Provider>
    </div>
  )
}

export default GifApp