import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Destination from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero"
        heroImg=".\src\assets\hero.jpg"
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
