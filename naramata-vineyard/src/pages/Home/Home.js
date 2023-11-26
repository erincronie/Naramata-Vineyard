import '../Home/Home.scss';
import React from "react";
import Slideshow from '../../components/Slideshow/Slideshow';
import Map from '../../components/Map/Map';
import Pool from '../../assets/images/gradient-pool-homepage.png';
import Amenities from '../../components/Amenities/Amenities'
import WineGlass from '../../assets/images/wineglass-pool.JPG';
import Dogs from '../../assets/images/dogs.jpeg';

const Home = () => {
    return (
        <main className='homepage'>
            <Slideshow className='homepage__slideshow'/>
            <h2 className='homepage__slideshow-title'>Weclome to Naramata Vineyard B&B</h2>

            <div className='homepage__upper-section'>
                <h1 className='homepage__title'>Namasté Naramata</h1>

                <p className='homepage__bio'>Indulge in the tranquility of our bed and breakfast nestled within a vineyard's embrace, where the subtle whispers of rustling vines and the serene ambiance of the rolling countryside create a peaceful escape. Our quiet retreat on the vineyard offers a calming haven for guests, inviting them to unwind amid the picturesque beauty of the winemaking landscape</p>
            <div className='homepage__border-bottom'></div>
            </div>
            <div className='homepage__lower-section'>
                <img className='homepage__image'src ={Pool} alt="Pool and deck" />
                <p className='homepage__suite-description'>Discover a cozy retreat at our charming bed and breakfast, where you'll find a thoughtfully designed one-bedroom suite. Unwind in the comfort of a spacious bedroom featuring two inviting beds, perfect for a restful night's sleep. The well-appointed bathroom ensures convenience and privacy. Enjoy the convenience of a fully equipped kitchenette, where you can prepare light meals or savor morning coffee. The welcoming living room provides a relaxing space to unwind, complete with tasteful decor and a warm ambiance. Whether you're a solo traveler or a couple seeking a peaceful getaway, our one-bedroom suite offers a delightful blend of comfort and homely charm.</p>
             <div className='homepage__border-bottom'></div>
            
                <img className='homepage__image' src={WineGlass} alt="" />            
                <p className='homepage__suite-description'>Nestled in comfort and convenience, our inviting one-bedroom bed and breakfast ensures every stay is designed for your relaxation. With a well-appointed room featuring clean sheets, plush pillows, and all the essentials for a peaceful night's sleep, your comfort is our priority. For tech-savvy travelers, we offer free Wi-Fi, streaming services, and convenient USB charging ports. Enjoy a cozy atmosphere with amenities like a lounge, outdoor seating, and a fireplace. Explore the surrounding area with local recommendations on attractions and dining options. We're also pet-friendly and have eco-friendly initiatives in place. Whether you're here for leisure or business, our one-bedroom B&B provides a welcoming retreat with the perfect blend of comfort and charm.</p>
             <div className='homepage__border-bottom'></div>
             </div>

            <Amenities />

            <img className='homepage__image' src={Dogs} alt="" />
            <Map />
        </main>
    );
}

export default Home;
