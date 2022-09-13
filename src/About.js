function About() {
    return (
        <div className="about" id="about">
            <img className="about-bg" src={process.env.PUBLIC_URL + "/images/about/AboutUsBackground.png"} alt="" />
            <img className="about-splash" src={process.env.PUBLIC_URL + "/images/about/AboutUsPaintSplatter.png"} alt="" />
            <div className="about-content"><div className="about-story"> <div className="pink about-our">OUR</div> STORY</div>
            <div className="about-text">We are the disrupters, the artist, the people that question the powers in play. The early adopters the community builders.<br></br>  Trying to use a technology that can even the playing field for every human on earth, regardless of you location or race or economic status. <br></br> <br></br> Change is coming.</div> 
            <img className="about-brad-pitt"src={process.env.PUBLIC_URL + "/images/about/AboutUsBradPittImage.png"} alt="" />
            </div>
        </div>
    )
}    
 
export default About;