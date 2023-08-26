import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/contact.JPEG";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="İletişim"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
