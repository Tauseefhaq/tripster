import Navbar from "../components/navbar"
import Hero from "../components/hero";
import contactImg from "../assets/contact.jpg"
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

function Contact(){

    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact Us"
        button="hide"
        ></Hero>
        <ContactForm></ContactForm>
        <Footer></Footer>
        </>
    )
}

export default Contact