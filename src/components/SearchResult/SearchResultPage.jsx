import React from 'react';
import Header from '../homePageComponents/Header'
import SearchBar from '../homePageComponents/SearchBar';
import Destacados from '../homePageComponents/Destacados';
import Information from '../homePageComponents/Information';
import Categories from './Categories';
import SearchResultList from './SearchResultList';

const SearchResultPage = () => {
    return (
        <div>
            <Header/>
            <div className='bg-[#F1F1F1] pt-5 pb-5'>
                <SearchBar/>
            </div>
            <div className=' pb-5'>
                <Destacados/>
            </div>
            <div className="flex  items-center justify-center bg-[#F1F1F1]">
                <div className='w-1/4 p-4 sticky top-0 self-start'>
                    <Categories/>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mt-5 mx-2 sm:mx-5 mb-5 w-full max-w-6xl">
                    <SearchResultList/>
                </div>
            </div>
            <Information/>
        </div>
    );
}
export default SearchResultPage;