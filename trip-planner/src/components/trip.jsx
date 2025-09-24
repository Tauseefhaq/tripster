import "../css/trip.css" 
import Tripdata from "../contexts/tripData"
import istanbul from "../assets/istanbul.jpg"
import hanoi from "../assets/hanoi.jpg"
import marrakech from "../assets/marrakech.jpg"

function Trip(){

    return(
        <div className="trip">
            <h1>Currently Trending</h1>
            <p>The hottest places of the season</p>
            <div className="trip-card">
                <Tripdata
                img={istanbul}
                heading="Istanbul"
                text="Over the centuries, many cultures have added their mark to this prized piece of land. Today, you can experience those influences firsthand by exploring Istanbul’s mahalles (neighbourhoods). From the holy sites of Sultanahmet and the 19th-century European elegance of Beyoğlu to the high fashion of Nişantaşı, the vibrant café society of Kadıköy and the football-loving streets of Beşiktaş, it’s easy to see why travellers say that Istanbul isn’t just one city, but many cities within one."
                ></Tripdata>
                <Tripdata
                img={hanoi}
                heading="Hanoi"
                text="The charming Vietnamese capital has aged well, preserving the Old Quarter, monuments and colonial architecture, while making room for modern developments alongside. Hanoi may have shrugged off several former names, including Thang Long, or ascending dragon, but it hasn't forgotten its past, as sites such as Ho Chi Minh's Mausoleum and Hoa Lo Prison attest. Lakes, parks, shady boulevards and more than 600 temples and pagodas add to the appeal of this city, which is easily explored by taxi."
                ></Tripdata>
                <Tripdata
                img={marrakech}
                heading="Marrakech"
                text="The “Red City” of Marrakesh is a magical place, brimming with markets, gardens, palaces, and mosques. Exploring the intimate courtyards and snaking alleyways of the historic Medina can easily eat up a day. Find inner peace at the serene Jardin Majorelle or take in the beauty of one of the city’s historic mosques (taking note that, unless you are Muslim, you are not allowed to enter)."
                ></Tripdata>
            </div>
        </div>
    )
}

export default Trip