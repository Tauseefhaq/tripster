import Navbar from "../components/navbar"
import Hero from "../components/hero"
import aboutImg from "../assets/about.jpg"
import Footer from "../components/footer"
import AboutText from "../components/about"

function About(){

    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="About"
        button="hide"
        ></Hero>
        <AboutText></AboutText>
        <Footer></Footer>
        </>
    )
}

export default About