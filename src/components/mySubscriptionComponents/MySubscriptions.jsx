import React from 'react';
import MenuPerfil from '../myProfilePageComponents/MenuPerfil';
import Header from '../homePageComponents/Header';
import SearchBar from '../homePageComponents/SearchBar';
import Information from '../homePageComponents/Information';
import Suscripcion from './Suscripcion';


const MySubscription = () => {
    return(
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <div className="flex justify-center items-center py-4">
              <SearchBar />
            </div>
            <div className="flex  items-center justify-center bg-[#F1F1F1]">
                <div className='w-1/4 p-4 sticky top-0 self-start'>
                    <MenuPerfil/>
                </div>
                <div className='w-3/4 flex flex-col gap-6 p-4 bg-white rounded-lg m-5 mr-10 md:mr-16 lg:mr-20'>
                    <Suscripcion/>
                </div>
            </div>
            <div>
                <Information/>
            </div>
        </div>
    );
}
export default MySubscription;