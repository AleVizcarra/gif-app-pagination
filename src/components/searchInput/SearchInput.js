import { useContext } from "react";
import { useForm } from "../../hooks/useForm"
import { SearchContext } from "../context/SearchContext";

const SearchInput = () => {

    const {setSearch} = useContext(SearchContext);

    const [inputValue, handleInputChange, reset] = useForm('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(inputValue);
        reset();
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="input-container">
            <div className="search-icon">
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 15.5L19 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

                <input
                    className="search-input"
                    type="text"
                    autoComplete="off"
                    placeholder="Search gifs"
                    value={inputValue}
                    onChange={handleInputChange}
                    required 
                />

                <button type="submit">
                    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
        </div>
    </form>
  )
}

export default SearchInput