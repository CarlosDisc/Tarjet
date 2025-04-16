import React from 'react';

const Videos = ({bg}) => {
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Ejemplo de URL de YouTube (puedes cambiarla)

    return (
        <div className="flex justify-center items-center p-4"
        style={{ backgroundColor: bg }}>
            <div className="w-full md:w-[600px] lg:w-[800px]">
                <iframe
                    width="100%"
                    height="400px"
                    src={videoUrl}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>

    );
};
export default Videos;