function Gallery() {
    return (
        <div className="gallery">
            <img className="gallery-splatter" src={process.env.PUBLIC_URL + "/images/rules/10RulesPaintSplatter.png"} alt="" />
            <div className="gallery-header"> <div className="pink"> NFT&nbsp;</div> GALLERY</div>
            <div className="gallery-slide-container">

            <div className="image-slider">
                
                <section id="slider">
                    <input type="radio" name="slider" id="s1"  />
                    <input type="radio" name="slider" id="s2"  />
                    <input type="radio" name="slider" id="s3"  />
                    <input type="radio" name="slider" id="s4"  />
                    <input type="radio" name="slider" id="s5"  />
                    <input type="radio" name="slider" id="s6"  />
                    <input type="radio" name="slider" id="s7"  />
                    <input type="radio" name="slider" id="s8"  />
                    <input type="radio" name="slider" id="s9"  defaultChecked/>

                <label for="s1" id="slide1">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork1.jpg"} alt="" height="100%" width="100%"/>  
                 </label>
                 <label for="s2" id="slide2">
                 <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork2.jpg"} alt="" height="100%" width="100%"/>
                  </label>
                  <label for="s3" id="slide3">
                  <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork3.jpg"} alt="" height="100%" width="100%"/>
                </label>
                <label for="s4" id="slide4">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork4.jpg"} alt="" height="100%" width="100%"/>
                </label>
                <label for="s5" id="slide5">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork5.jpg"} alt="" height="100%" width="100%"/>
                </label>
                <label for="s6" id="slide6">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork6.jpg"} alt="" height="100%" width="100%"/>
                </label>
                <label for="s7" id="slide7">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork7.jpg"} alt="" height="100%" width="100%"/>
                </label>
                <label for="s8" id="slide8">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork8.jpg"} alt="" height="100%" width="100%"/>
                </label>
                <label for="s9" id="slide9">
                <img src={process.env.PUBLIC_URL + "/images/gallery/Untitled_Artwork9.jpeg"} alt="" height="100%" width="100%"/>
                </label>
                <div className="gallery-button-container">
            <div className="gallery-button-div"><button type="button" className="button-pink"> <div className="button-text"> MINT&nbsp;AN&nbsp;NFT </div><img src={process.env.PUBLIC_URL + "/images/gallery/NFTPageMintIconButton.png"} alt="" className="mint-button"/></button>
            </div> </div>
                </section> 
                
            </div>
            
            </div>
            
        </div>
    )
}    
 
export default Gallery;