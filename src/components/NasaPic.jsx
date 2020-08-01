import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';


const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPic = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(()=> {
        fetchPics();

        async function fetchPics(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data)
        }
    }, []);

    if(!photoData)
    return 'picture not available right now';

    return (
        <div>
            <Navbar />
            {photoData.media_type === 'image' ? (
                <img
                src={photoData.url}
                alt={photoData.title}
                />
            ) : (
                <iframe
                title='space-video'
                src='photoData.url'
                frameBorder='0'
                allow='autoplay'
                allowFullScreen
                className='video'
                />
            )}
            
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>

        </div>
    );
};

export default NasaPic;