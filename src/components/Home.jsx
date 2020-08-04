import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className = 'Home'>
            <Link  className = 'home__link' to='nasa-picture'>
            Looking At The Stars Is A Look Back In Time!
            </Link>
            <p className = 'home__description'>
            Because of the finite speed of light, when you gaze up into the night sky, you are looking into the past. The bright star Sirius is 8.6 light years away. That means the light hitting your eye tonight has been traveling for 8.6 years. Put another way: When you look at Sirius tonight, you see it as it was 8.6 years ago.

            As you look at more distant objects, the effect becomes bigger and bigger. The stars of the Big Dipper range from 60 to 125 light years away. When you look at Dubhe, the front star in the “bowl” of the Dipper, you are seeing light from before you were born.
            </p>
        </div>
    )
}
 export default Home;