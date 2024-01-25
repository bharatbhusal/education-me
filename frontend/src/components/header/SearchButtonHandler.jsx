import React from 'react'

import { IoMdSearch } from 'react-icons/io';

const SearchButton = () => {
    const handleSearchButtonClick = () => {
        const search = document.querySelector('.header .flex .search-form');
        const profile = document.querySelector('.header .flex .profile');
        search.classList.toggle('active');
        profile.classList.remove('active');
    };

    return (
        <div id="search-btn" className="fas fa-search" onClick={handleSearchButtonClick}>
            <IoMdSearch />
        </div>
    )
}

const SearchBox = () => {
    return (
        <form action="" method="post" className="search-form">
            <input
                type="text"
                name="search_box"
                required
                placeholder="search courses..."
                maxLength="100"
            />
            <button type="submit" className="fas fa-search">
                <IoMdSearch />
            </button>
        </form>
    )
}

export { SearchButton, SearchBox }