import '../BookNow/BookNow.scss';
import Calendar from '../../components/Calendar/Calendar';

const BookNow = () => {
    return (
        <section className='booknow'>
            <Calendar />
            <div className='booknow__rates'>
                <h3 className='booknow__rates'>Rate: 200$ CAD per night</h3>
                <p className='booknow__checkin'>Check in: 3pm PST</p>
                <p className='booknow__checkout'>Check in: 11am PST</p>
            </div>
            <div className='booknow__directions'>
                <h3 className='booknow__directions-title'>Directions from the Penticton Air Port</h3>
                    <iframe className='booknow__directions-map' src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d82884.19863520598!2d-119.66357899485536!3d49.51979858502271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5482898bac969aaf%3A0xfa8e122266deadbd!2sPenticton%20Airport%2C%203000%20Airport%20Rd%2C%20Penticton%2C%20BC%20V2A%208X1!3m2!1d49.460593599999996!2d-119.60535709999999!4m5!1s0x54827b58260f4db5%3A0x87954edddddf2bba!2s2890%20Naramata%20Rd%2C%20Naramata%2C%20BC%20V0H%201N0!3m2!1d49.5855384!2d-119.579386!5e0!3m2!1sen!2sca!4v1700697970778!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </section>
    )
}

export default BookNow;