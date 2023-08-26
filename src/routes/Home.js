import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import AboutImg from "../assets/macedonia.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Erasmus Yolculuğum"
        text="Balkanlardaki Erasmus Hikayem"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
