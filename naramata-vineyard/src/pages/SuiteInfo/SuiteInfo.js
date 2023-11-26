import React from "react";
import './SuiteInfo.scss';
import stock1 from '../../assets/images/stockimage-bed.jpeg';
import stock2 from '../../assets/images/stockimage-bed2.jpeg';
import stock3 from '../../assets/images/stockimage-bed3.jpeg';
import stock4 from '../../assets/images/stockimage-coffee.webp';
import Amenities from "../../components/Amenities/Amenities";

const SuiteInfo = () => {
    return (
        <section className="suiteinfo">
          <div className="suiteinfo__container">
            <h2 className="suiteinfo__title">The Suite</h2>

            <h3 className="suiteinfo__second-title">1 bedroom, 2  beds - private bathroom</h3>

            <img className='suiteinfo__image' src={stock1} alt="bedding" />
            <p className="suiteinfo__text">Experience comfort and tranquility in our one-bedroom suite, featuring two inviting beds amid the scenic beauty of our vineyard. Ideal for a restful night's sleep, the suite offers a well-appointed bathroom, a cozy living room, and a fully equipped kitchenette. Perfect for solo travelers or couples, it's a charming retreat in the heart of our vineyard.</p>
            
            
            <img className='suiteinfo__image' src={stock4} alt="bedding" />
            <p className="suiteinfo__text">Step into convenience with our small kitchenette, a cozy haven for preparing light meals or brewing your morning coffee. Thoughtfully designed for efficiency, it features essential amenities, including a compact refrigerator, a microwave, and a coffee maker. Whether you're seeking a quick snack or planning a leisurely breakfast, our kitchenette provides the perfect space to indulge your culinary desires. The charming setting and thoughtful layout make it a delightful addition to your stay, offering both functionality and a touch of homely comfort.</p>
            
            
            <img className='suiteinfo__image' src={stock3} alt="bedding" />
            <p className="suiteinfo__text">Embark on a delightful journey through Naramata's local wineries, breweries, and distilleries, each offering a unique taste of the region's craftsmanship. From award-winning wines to craft brews and artisanal spirits, savor the diverse flavors of this vibrant beverage culture amid picturesque landscapes.</p>
            
            <Amenities />
            </div>
        </section>
    );
}

export default SuiteInfo;
