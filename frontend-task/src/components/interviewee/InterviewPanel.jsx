import { Component } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HeaderComponent from "./HeaderComponent";
//import FooterComponent from "./FooterComponent";
import IntervieweeComponent from "./IntervieweeComponent";
import WelcomeComponent from "./WelcomeComponent";
import IntervieweeUpdateComponent from "./IntervieweeUpdateComponent";
import ErrorComponent from "./ErrorComponent";
import InterviewComponent from "./InterviewComponent";
import InterviewUpdateComponent from "./InterviewUpdateComponent";
import PositionUpdateComponent from "./Position/PositionUpdateComponent";
import PositionComponent from "./Position/PositionComponent";
import RoundComponent from "./Round/RoundComponent";
import RoundUpdateComponent from "./Round/RoundUpdateComponent";
import InterviewerComponent from "./Interviewer/InterviewerComponent";
import InterviewerUpdateComponent from "./Interviewer/InterviewerUpdateComponent";
class Interviewee extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={WelcomeComponent}/>
                    <Route path="/interviewees" component={IntervieweeComponent}/>
                    <Route path="/interviews" component={InterviewComponent}/>
                    <Route path="/position" component={PositionComponent}/>
                    <Route path="/round" component={RoundComponent}/>
                    <Route path="/welcome" component={WelcomeComponent}/>
                    <Route path="/update/:id" component={IntervieweeUpdateComponent}/>
                    <Route path="/roundupdate/:id" component={RoundUpdateComponent}/>
                    <Route path="/interviewer" component={InterviewerComponent}/>
                    <Route path="/interviewerupdate/:id" component={InterviewerUpdateComponent}/>
                    <Route path="/positionupdate/:id" component={PositionUpdateComponent}/>
                    <Route path="/interview_update/:id" component={InterviewUpdateComponent}/>
                    <Route  component={ErrorComponent}/>
                    </Switch>
                    {/*<FooterComponent/>*/}
                    </>
                </Router>
            </div>

        )

    }
}

export default Interviewee