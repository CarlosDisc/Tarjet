import React from 'react';
import MenuPerfil from './MenuPerfil';
import Header from '../homePageComponents/Header';
import SearchBar from '../homePageComponents/SearchBar';
import ProfileForm from './ProfileForm';
import Information from '../homePageComponents/Information';


const ProfilePage = () => {
    return(
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <div className="flex justify-center items-center py-4">
              <SearchBar />
            </div>
            <div className="flex items-center justify-center bg-[#F1F1F1]">
                <div className='w-1/4 p-4 sticky top-0 self-start'>
                    <MenuPerfil/>
                </div>
                <div className='bg-white rounded-lg shadow-md p-6 mt-5 mx-2 sm:mx-5 mb-5 w-full max-w-6xl'>
                    <ProfileForm/>
                </div>
            </div>
            <div>
                <Information/>
            </div>
        </div>
    );
}
export default ProfilePage;