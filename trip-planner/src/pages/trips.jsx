import Navbar from "../components/navbar";
import Hero from "../components/hero";
import serviceImg from "../assets/service.jpg";
import Footer from "../components/footer";
import Trip from "../components/trip";
import { TripItems } from "../contexts/trips";
import "../css/service.css";
import  {ListContext}  from "../contexts/trips.jsx";
import ItemList from "../components/list.jsx";
import ItemModal from "../components/popup.jsx";


function Trips() {


  
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={serviceImg}
        title="Plan a Trip with Us"
        button="hide"
      ></Hero>
      <TripItems>
        <div className="head">
          <h1>Our Offers</h1>
          <p>Plan a trip with us today!</p>
        </div>
        <ItemList />
        <ItemModal />

        <Trip></Trip>
      </TripItems>
      <Footer></Footer>
    </>
  );
}

export default Trips;
