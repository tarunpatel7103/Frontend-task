import React,{Component} from "react";
import image from './Modern-Apps-Update.png';
import FooterComponent from "./FooterComponent";

class WelcomeComponent extends Component{
    
    render(){
        return(
            <>
            
            <img src={image} alt="image" height="270" width="600"/>
            <h1>Cloud Data Engineering Company</h1>
            <div>
                <h5>Enabling enterprises with data driven decision making</h5>
            </div>
            
            <FooterComponent/>
            </>
            
        )
    }

    
}
export default WelcomeComponent;