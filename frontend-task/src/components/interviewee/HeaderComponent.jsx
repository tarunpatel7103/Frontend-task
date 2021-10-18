import React,{Component} from "react";
import { Link } from "react-router-dom";
import logo from "./Anblicks-logo.png";
class HeaderComponent extends Component{
    render(){
        
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div ><a href="http://www.anblicks.com" className="navbar-brand"><img src={logo} alt="Logo" width="200" height="65"/></a></div>
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/welcome">Home</Link></li>
                        
                        <li ><Link className="nav-link" to="/interviewees">Interviewee</Link></li>
                        <li ><Link className="nav-link" to="/interviews">Interview</Link></li>
                        <li ><Link className="nav-link" to="/position">Position</Link></li>
                        <li ><Link className="nav-link" to="/round">Round</Link></li>
                        <li ><Link className="nav-link" to="/interviewer">Interviewer</Link></li>
                        
                    </ul>
                    
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;