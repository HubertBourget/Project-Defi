function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar-bg"><img src="/images/navbar/HeroMenuBar.png" className="navbar-img"alt="" /></div>
            <div className="navbar-container">
            <div className="navbar-logo"><a href="#hero"><img src="/images/navbar/MenuProjectDefiLogo.png" alt="" /></a></div>
            <div className="navbar-menu-item"><a href="#hero">Home</a></div>
            <div className="navbar-menu-item"><a href="#about">About</a></div>
            <div className="navbar-menu-item"><a href="#roadmap">Roadmap</a></div>
            <div className="navbar-menu-item"><a href="#follow">Follow&nbsp;Us</a></div>
            <div className="navbar-menu-item"><a href="#founder">Founder</a></div>
            <div className="navbar-menu-item"><a href="#follow">Contact</a></div>
            
            <div className="navbar-menu-icon-holder">
            <div className="navbar-menu-icon-first"><a href="https://discord.gg/SxPAbhmqjE" target="_blank" rel="noreferrer" display="inline-block"><img src="/images/navbar/DicordMenuIcon.png" alt="" /></a></div>
            <div className="navbar-menu-icon"><a href="https://www.instagram.com/project_defi/" target="_blank" rel="noreferrer" display="inline-block"><img src="/images/navbar/TwitterMenuIcon.png" alt="" /></a></div>
            <div className="navbar-menu-icon"><a href="https://youtube.com/channel/UC1ScYfmV66CYQIghMeda8hA" target="_blank" rel="noreferrer" display="inline-block"><img src="/images/navbar/YoutubeMenuIcon.png" alt="" /></a></div>
            <div className="navbar-menu-icon"><a href="https://mobile.twitter.com/project_defi_" target="_blank" rel="noreferrer" display="inline-block"><img src="/images/navbar/Instagram Menu Icon.png" alt="" /></a></div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;