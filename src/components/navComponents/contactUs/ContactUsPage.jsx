import React from 'react';
import Header from "../../homePageComponents/Header";
import Information from "../../homePageComponents/Information";
import homePage from "../../../images/homePage.jpg";
import ContactUsForm from "./ContactUsForm"
import ContactUsGps from './ContactUsGps';

const ContactUsPage = () => {
    return (
        <div>
            <Header/>
                <div className="relative h-[500px] flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${homePage})` }}
                    />
                        <div className="absolute inset-0 bg-white opacity-60"></div>
                        <div className="absolute bottom-10 left-10 z-10">
                        <h1 className="text-white text-3xl font-bold drop-shadow-lg">
                            CONTÁCTANOS
                        </h1>
                    </div>
                </div>

                <div>
                    <ContactUsForm/>
                </div>
                <div>
                    <ContactUsGps/>
                </div>
            <Information/>
        </div>
    );
}
export default ContactUsPage;