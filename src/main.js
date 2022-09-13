import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Rules from './Rules';
import Gallery from './Gallery';
import Roadmap from './Roadmap';
import Founder from './Founder';
import Follow from './Follow';
import Connect from './Connect';
import Footer from './Footer';


function Main() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="content">
                <Hero></Hero>
                <About></About>
                <Rules></Rules>
                <Gallery></Gallery>
                <Roadmap></Roadmap>
                <Founder></Founder>
                <Follow></Follow>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Main;