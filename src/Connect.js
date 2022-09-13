import TextField from '@material-ui/core/TextField';
import { TextArea } from '@react-ui-org/react-ui';
function Connect() {
    return (
        <div className="connect">
            <img className="connect-splash" src={process.env.PUBLIC_URL + "/images/roadmap/RoadMapPaintSplatter.png"} alt="" />
            <div className="connect-header"><div className="pink"> CONNECT&nbsp;</div> WITH US</div>
            <div className="connect-our-email" >connect@projectdefi.com</div>
            <div className="connect-container">
            <div className="connect-inputfields"><div className="connect-item-left"><TextField className="connect-text-input" id="first-name" label="First Name"/></div>
            <div className="connect-item-right"><TextField className="connect-text-input" id="last-name" label="Last Name" /></div></div>
            <div className="connect-inputfields"><div className="connect-item-left"><TextField className="connect-text-input" id="email" label="Email" /></div>
            <div className="connect-item-right"><TextField className="connect-text-input" id="phone" label="Phone" /></div></div>
            <div className="connect-inputfields"><div className="connect-item-left"><TextField className="connect-text-input" id="country" label="Country"/></div>
            <div className="connect-item-right"><TextField className="connect-text-input" id="postcode" label="Postcode" /> </div></div>
            <div className="connect-inputfield-wide"><textarea id="message" name="message" label="Postcode" isLabelVisible={false} placeholder="Type your message here"  cols="51" rows="5"></textarea></div>
            <button className="connect-button">Submit</button>
            </div>
            </div>
    )
}    
 
export default Connect;