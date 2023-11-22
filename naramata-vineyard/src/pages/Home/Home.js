import '../Home/Home.scss'
import React from "react";
import Slideshow from '../../components/Slideshow/Slideshow';
import Map from '../../components/Map/Map';
import Pool from '../../assets/images/gradient-pool-homepage.png';
import Amenities from '../../components/Amenities/Amenities'

const Home = () => {
    return (
        <main className='homepage'>
            <Slideshow />
            <div className='homepage__upper-section'>
                <h2 className='homepage__title'>Namasté Naramata</h2>
                <p className='homepage__bio'>Indulge in the tranquility of our bed and breakfast nestled within a vineyard's embrace, where the subtle whispers of rustling vines and the serene ambiance of the rolling countryside create a peaceful escape. Our quiet retreat on the vineyard offers a calming haven for guests, inviting them to unwind amid the picturesque beauty of the winemaking landscape</p>
            </div>
            <img className='homepage__image'src ={Pool} alt="Pool and deck" />
            <Map />
            <Amenities />
        </main>
    );
}

export default Home;
