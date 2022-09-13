function Follow() {
    return (
        <div className="follow" id="follow">
            <img className="follow-bg" src={process.env.PUBLIC_URL + "/images/follow/ElementsPageBackground.png"} alt="" />
            <div className="follow-header"><div className="pink"> FOLLOW&nbsp;</div> PROJECT DEFI</div>
            <div className="follow-media-icon-container"> 
                <a href="https://www.instagram.com/project_defi/" target="_blank" rel="noreferrer" display="inline-block"> <img className="follow-media-icon" src="/images/follow/InstagramFollowUsIcon.png" alt="" /></a>
                <a href="https://youtube.com/channel/UC1ScYfmV66CYQIghMeda8hA" target="_blank" rel="noreferrer" display="inline-block"> <img className="follow-media-icon" src="/images/follow/YoutubeFollowUsIcon.png" alt="" /></a>
                <a href="https://mobile.twitter.com/project_defi_" target="_blank" rel="noreferrer" display="inline-block"> <img className="follow-media-icon" src="/images/follow/TwitterFollowUsIcon.png" alt="" /></a>
            </div></div>
    )
}    
 
export default Follow;