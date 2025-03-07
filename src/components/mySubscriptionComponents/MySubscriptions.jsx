import React from 'react';
import MenuPerfil from '../profilePageComponents/MenuPerfil';
import Header from '../homePageComponents/Header';
import SearchBar from '../homePageComponents/SearchBar';
import Information from '../homePageComponents/Information';


const MySubscription = () => {
    return(
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <div className="flex justify-center items-center py-4 pt-35">
              <SearchBar />
            </div>
            <div className="flex  items-center justify-center bg-[#F1F1F1]">
                <div className='w-1/4 p-4 sticky top-0 self-start'>
                    <MenuPerfil/>
                </div>
                <div className='w-full flex justify-center p-6'>
                    
                </div>
            </div>
            <div>
                <Information/>
            </div>
        </div>
    );
}
export default MySubscription;