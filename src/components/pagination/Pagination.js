import { useContext, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../../index.css';
import { SearchContext } from '../context/SearchContext';

const Pagination = () => {

    const {counter, increment, decrement} = useContext(SearchContext);

  return (
    <div className="pagination">
        <button onClick={decrement} disabled={(counter === 1) && true}>
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        
        <p>{counter}</p>

        <button onClick={increment} >
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
  )
}

export default Pagination