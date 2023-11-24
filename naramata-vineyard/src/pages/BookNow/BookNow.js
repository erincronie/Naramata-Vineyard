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
            
        </section>
    )
}

export default BookNow;