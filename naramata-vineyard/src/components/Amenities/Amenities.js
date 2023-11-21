import '../Amenities/Amenities.scss';
import Bed from '../../assets/icons/bed.svg';
import Shower from '../../assets/icons/shower.svg';
import Wifi from '../../assets/icons/wifi.svg';
import Chair from '../../assets/icons/chair.svg';
import Dining from '../../assets/icons/resturant.svg';
import Garden from '../../assets/icons/garden.svg';
import Safety from '../../assets/icons/safety.svg';
import Grill from '../../assets/icons/grill.svg';
import Pets from '../../assets/icons/pets.svg';
import Nature from '../../assets/icons/nature.svg';
import Parking from '../../assets/icons/parking.svg';
import Pool from '../../assets/icons/pool.svg';
import Map from '../../assets/icons/map.svg';


const Amenities = () => {
    return (
<div className='amenities'>
    <div className='amenities__section'>
        <img src={Bed} alt='bed icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Bedroom Amenities:</h3>
        <p className='amenities__features'>Clean sheets and bedding</p>
        <p className='amenities__features'>Pillows and extra blankets</p>
        <p className='amenities__features'>Comfortable mattress</p>
        <p className='amenities__features'>Towels (bath and hand towels)</p>
        <p className='amenities__features'>Dresser or wardrobe for clothing storage</p>
        <p className='amenities__features'>Hangers</p>
        <p className='amenities__features'>Reading lamps</p>
        <p className='amenities__features'>Alarm clock</p>
        <p className='amenities__features'>Full-length mirror</p>
    </div>

    <div className='amenities__section'>
        <img src={Shower} alt='shower icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Bathroom Amenities:</h3>
        <p className='amenities__features'>Toiletries (shampoo, conditioner, body wash, soap)</p>
        <p className='amenities__features'>Hairdryer</p>
        <p className='amenities__features'>Towel racks or hooks</p>
        <p className='amenities__features'>Tissues</p>
        <p className='amenities__features'>Basic first aid kit</p>
    </div>

    <div className='amenities__section'>
        <img src={Wifi} alt='wifi icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Technology and Connectivity:</h3>
        <p className='amenities__features'>Free Wi-Fi</p>
        <p className='amenities__features'>Television with cable and streaming services</p>
        <p className='amenities__features'>USB charging ports</p>
        <p className='amenities__features'>Power outlets near the bed</p>
    </div>

    <div className='amenities__section'>
        <img src={Chair} alt='chair icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Comfort and Convenience:</h3>
        <p className='amenities__features'>Air conditioning or heating</p>
        <p className='amenities__features'>Ceiling fan</p>
        <p className='amenities__features'>Iron and ironing board</p>
        <p className='amenities__features'>Luggage rack</p>
        <p className='amenities__features'>Blackout curtains</p>
    </div>

    <div className='amenities__section'>
        <img src={Dining} alt='fork and knife icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Kitchen and Dining:</h3>
        <p className='amenities__features'>Breakfast service</p>
        <p className='amenities__features'>Coffee maker and kettle</p>
        <p className='amenities__features'>Microwave</p>
        <p className='amenities__features'>Refrigerator</p>
        <p className='amenities__features'>Dining table</p>
    </div>

    <div className='amenities__section'>
        <img src={Garden} alt='garden icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Common Areas:</h3>
        <p className='amenities__features'>Lounge and sitting area</p>
        <p className='amenities__features'>Outdoor seating and garden</p>
        <p className='amenities__features'>Fireplace</p>
        <p className='amenities__features'>Board games or books</p>
        <p className='amenities__features'>Guest kitchenette</p>
    </div>

    <div className='amenities__section'>
        <img src={Safety} alt='safety icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Safety and Security:</h3>
        <p className='amenities__features'>Smoke detectors</p>
        <p className='amenities__features'>Fire extinguisher</p>
        <p className='amenities__features'>Emergency exit plan</p>
    </div>

    <div className='amenities__section'>
        <img src={Grill} alt='' className='amenities__icons' />
        <h3 className='amenities__titles'>Outdoor Features:</h3>
        <p className='amenities__features'>Garden and patio</p>
        <p className='amenities__features'>Barbecue area</p>
    </div>

    <div className='amenities__section'>
        <img src={Pets} alt='pets icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Special Accommodations:</h3>
        <p className='amenities__features'>Pet-friendly rooms</p>
    </div>

    <div className='amenities__section'>
        <img src={Nature} alt='nature icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Environmental Initiatives:</h3>
        <p className='amenities__features'>Recycling bins</p>
        <p className='amenities__features'>Eco-friendly toiletries</p>
    </div>

    <div className='amenities__section'>
        <img src={Parking} alt='parking icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Parking:</h3>
        <p className='amenities__features'>On-site parking</p>
        <p className='amenities__features'>Secure bike storage</p>
    </div>

    <div className='amenities__section'>
        <img src={Pool} alt='pool icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Fitness and Wellness:</h3>
        <p className='amenities__features'>Pool and hot tub access</p>
    </div>

    <div className='amenities__section'>
        <img src={Map} alt='map icon' className='amenities__icons' />
        <h3 className='amenities__titles'>Local Recommendations:</h3>
        <p className='amenities__features'>Information on nearby attractions, restaurants, and activities</p>
        <p className='amenities__features'>Maps and guides</p>
    </div>
</div>
)
}

export default Amenities;