import React from "react";
import arrow_categories from '../../assets/arrows/arrow_categories.png';

const Categories = () => {
    const categories = ["Tecnología", "Ropa", "Electrónica", "Hogar"];

    return (
        <div className="space-y-4"> {/* Espacio entre las categorías */}
            {categories.map((category, index) => (
                <div key={index} className="flex items-center gap-x-4 px-8 py-3 rounded-md transition duration-300 hover:bg-white">
                    <div>{category}</div>
                    <img 
                        src={arrow_categories} 
                        alt="arrow_categories"
                        className="h-4 ml-auto"
                    />
                </div>
            ))}
        </div>
    );
};
export default Categories;