import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSnackbar } from 'notistack';

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPic = () => {
    const [photoData, setPhotoData] = useState(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(()=> {
        console.log(apiKey)
        async function fetchPics(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            enqueueSnackbar(data.title)
            setPhotoData(data);
            console.log(data)
        }
        fetchPics();
    }, []);

    

    if(!photoData)
    return 'Picture not available right now'
    
    

    return (
        
        <>
        <Navbar />
        
        <div className = 'nasaPic__photo'>
            {photoData.media_type === 'image' ? (
                <img className = 'pic'
                src={photoData.url}
                alt={photoData.title}
                />
            ) : (
                <iframe
                title='space-video'
                src={photoData.url}
                frameBorder={0}
                allow='autoplay'
                allowFullScreen
                className='video'
                />
            )}
            
            <div>
                <h1 className ='title'>{photoData.title}</h1>
                <p className = 'date'>{photoData.date}</p>
                <p className ='explanation'>{photoData.explanation}</p>
            </div>

        </div>
        </>
        
    );
};

export default NasaPic;