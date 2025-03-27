import React from "react";

const ContactUsGps = () => {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7283915258845!2d-63.17362828538597!3d-17.783313098612714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e77fda1a2e8f%3A0x75c6f62c4e9dd3b7!2sSanta%20Cruz%20de%20la%20Sierra%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1629835645732!5m2!1ses!2sbo"; // URL de Google Maps
    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full md:w-[600px] lg:w-[800px] h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
export default ContactUsGps;