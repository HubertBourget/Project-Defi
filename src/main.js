import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Rules from "./Rules";
import Gallery from "./Gallery";
import Roadmap from "./Roadmap";
import Founder from "./Founder";
import Follow from "./Follow";
import Connect from "./Connect";
import Footer from "./Footer";
import Mint from "./contract/mint";

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">
        <Hero></Hero>
        <About></About>
        <Rules></Rules>
        <Mint></Mint>
        <Gallery></Gallery>
        <Roadmap></Roadmap>
        <Founder></Founder>
        <Follow></Follow>
        {/* <Connect></Connect> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;
