import '../Home/Home.scss'
import React from "react";
import Slideshow from '../../components/Slideshow/Slideshow';
import Map from '../../components/Map/Map';

const Home = () => {
    return (
        <main className='homepage'>
            <Slideshow />
            <h2 className='homepage__title'>Namasté Naramata</h2>
            <p className='homepage__bio'>Indulge in the tranquility of our bed and breakfast nestled within a vineyard's embrace, where the subtle whispers of rustling vines and the serene ambiance of the rolling countryside create a peaceful escape. Our quiet retreat on the vineyard offers a calming haven for guests, inviting them to unwind amid the picturesque beauty of the winemaking landscape</p>
            <Map />
        </main>
    );
}

export default Home;
