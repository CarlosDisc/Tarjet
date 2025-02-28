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
            <div className="flex justify-center items-center min-h-screen">
              <SearchBar />
            </div>
            <div>
                <MenuPerfil/>
            </div>
            <div>
                <ProfileForm/>
            </div>
            <div>
                <Information/>
            </div>
        
        </div>
    );
}
export default ProfilePage;