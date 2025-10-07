import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Destination from "../components/destination";
import Trip from "../components/trip";
import heroImg from "../assets/hero.jpg"
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero"
        heroImg={heroImg}
        title="Make memories not travel plans"
        text="Book your travel plans today"
        btnText="Book travels"
        url="/trips"
        button="show"
      ></Hero>
      <Destination></Destination>
      <Footer></Footer>
    </>
  );
}

export default Home;
