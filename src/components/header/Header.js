import React from 'react'
import SearchInput from '../searchInput/SearchInput'

const Header = () => {
  return (
    <header>
        <div className='header-container'>
            <div className='text-container'>
                <h1>
                    <a href="#">Gif App</a>
                </h1>

                <SearchInput />
            </div>    
        </div>

    </header>
  )
}

export default Header