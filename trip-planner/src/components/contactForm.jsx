import "../css/contactForm.css"

function ContactForm(){

    return(
        <div className="FormContainer">
            <h1>Contact us for more information</h1>
            <form>
                <input placeholder="Name"></input>
                <input placeholder="Mail"></input>
                <input placeholder="subject"></input>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm