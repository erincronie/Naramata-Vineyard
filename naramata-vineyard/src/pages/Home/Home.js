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
            <p className='homepage__suite-description'>Indulge in a cozy retreat at our charming bed and breakfast, where you'll find a thoughtfully designed one-bedroom suite. Unwind in the comfort of a spacious bedroom featuring two inviting beds, perfect for a restful night's sleep. The well-appointed bathroom ensures convenience and privacy. Enjoy the convenience of a fully equipped kitchenette, where you can prepare light meals or savor morning coffee. The welcoming living room provides a relaxing space to unwind, complete with tasteful decor and a warm ambiance. Whether you're a solo traveler or a couple seeking a peaceful getaway, our one-bedroom suite offers a delightful blend of comfort and homely charm.</p>
            <Map />
            <Amenities />
        </main>
    );
}

export default Home;
