function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="hero-bg">
            <img src={process.env.PUBLIC_URL + "/images/hero/HeroPageBacground.png"} alt="" /></div>
            <div className="hero-container">
            <div className="hero-left">
            <div className="pink supersize">ALWAYS</div>
            <div className="supersize">TALK</div> 
            <div className="supersize">ABOUT</div>
            <div className="supersize">PROJECT</div>
            <div className="supersize">DEFI</div> 
            <div className="hero-text">Project defi is a very unique nft project. Built on the etherium blockchain. Join our movement and become the owners of the next blue chip project. It’s crazy how one nft could change your life. <br></br>Don’t forget to join our discord.</div>
            
            <button type="button" className="button-pink" display="inline-block"><a href="https://discord.gg/SxPAbhmqjE" target="_blank" rel="noreferrer" display="inline-block"><div className="button-text">JOIN&nbsp;DISCORD</div><img className="discord-button" src={process.env.PUBLIC_URL + "/images/hero/DiscordLogoHeroPageButton.png"} alt="" /></a></button>
            </div>
            
            <div className="hero-right">
            <img className="hero-smiley" src={process.env.PUBLIC_URL + "/images/hero/HeroPageSmileyLogo.png"} alt="" />
            </div>

            </div>
            
            
            
            
            
        </div>
    )
}    
 
export default Hero;