import '../MeetTheHosts/MeetTheHosts.scss';
import Host1 from '../../assets/images/hosts-1.jpeg';
import Host2 from '../../assets/images/hosts-2.jpeg';
import Host3 from '../../assets/images/hosts-3.jpeg';

const Hosts = () => {
    return (
        <article className='hosts'>            
            <div className='hosts__section'>
            <h2 className='hosts__title'>Meet the hosts</h2>
                <p class='hosts__paragraphs'>Meet Christy and Allan, a couple who have owned the property for 30 years, and who have also found a shared passion in cultivating the earth. Nestled in the picturesque landscapes of Naramata, British Columbia, their story takes a delightful turn as they have dedicated a significant part of their lives to enjoy taking care of their Pinot Noir vineyard.</p>
                <div className='hosts__border-bottom'></div>
                <img className='hosts__images' src={Host3} alt="wedding photo of the host couple" />
                
                <p class='hosts__paragraphs'>Christy, with her warm and inviting nature, not only tends to the hearth of their home but also embraces the vineyard with a deep appreciation for the art of winemaking. Her hands, once skilled in the kitchen, now gracefully navigate the delicate process of nurturing grapes from vine to bottle.</p>
                <div className='hosts__border-bottom'></div>

                <p class='hosts__paragraphs'>Allan, the steadfast companion, may not be the archetypal adventurer, but he is the backbone of their vineyard. With a commitment to the land and a meticulous approach to viticulture, he ensures that each vine is given the care it deserves, contributing to the creation of wines that tell a story of the terroir they call home.</p>
                <div className='hosts__border-bottom'></div>

                <img className='hosts__images' src={Host2} alt="host couple" />

                <p class='hosts__paragraphs'>Their bed and breakfast, strategically situated amid the beauty of Naramata, becomes a unique haven where guests not only revel in the comfort of thoughtfully adorned rooms but also have the opportunity to savor the fruits of Christy and Allan's labor. The aroma of their Pinot Noir, aged to perfection, mingles with the air, creating an ambiance that invites guests to indulge in the local flavors.</p>
                <div className='hosts__border-bottom'></div>

                <p class='hosts__paragraphs'>As hosts, Christy and Allan invite fellow travelers not just to experience the warmth of their home but also to taste the essence of Naramata in each sip of their meticulously crafted wines. Their vineyard, a labor of love, stands as a testament to their commitment to both each other and to the land they have lovingly cultivated. It's a place where love, hospitality, and the art of winemaking come together in a symphony of flavors and shared moments.</p>
                <div className='hosts__border-bottom'></div>
                
                <img className='hosts__images' src={Host1} alt="host couple" />
            </div>
        </article>
    )
}

export default Hosts;