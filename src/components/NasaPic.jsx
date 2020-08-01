import React, { useState, useEffect } from 'react';



const NasaPic = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(()=> {
        fetchPics();
        
        async function fetchPics(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=eEapHmJaaYBcGKNxNHvh8Hh1kf5WfkxlMcmfHHlQ'
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if(!photoData)
    return 'picture not available right now';

    return (
        <div>
            <img
            src={photoData.url}
            alt={photoData.title}
            />

        </div>
    );
};

export default NasaPic;