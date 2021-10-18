import React,{Component} from "react";
import InterviewerDataService from "../../../api/interviewee/InterviewerDataService";

class InterviewerComponent extends Component{
     
    constructor(props){
        super(props)
        this.state={
            
            results :
            [
               
                
            ]
            
        };
        this.addInterviewerClicked=this.addInterviewerClicked.bind(this)
        this.refreshInterviewers=this.refreshInterviewers.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.updateInterviewerClicked=this.updateInterviewerClicked.bind(this)
        this.deleteInterviewerClicked=this.deleteInterviewerClicked.bind(this)
    }

    componentDidMount(){
        this.refreshInterviewers();
        console.log(this.state);
    }

    refreshInterviewers(){
        
        InterviewerDataService.retrieveAllInterviewer()
        .then(response => this.setState({
            results: response.data.result
        }))
        
    }

    deleteInterviewerClicked(id){
        
        InterviewerDataService.deleteInterviewer(id)
        .then(
            response=>{
               
                this.refreshInterviewers()
            }
        )

    }
    addInterviewerClicked(){
        
        this.props.history.push(`/interviewerupdate/${-1}`)
        

    }

    updateInterviewerClicked(id){
        this.props.history.push(`/interviewerupdate/${id}`)

    }
    render(){
        return(
            <div>
                <h1>List of Interviewer</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                          
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                                {this.state.results.map(interviewer =>
                                <tr >
                                    
                                    <td>{interviewer.name}</td>
                                   
                                    <td><button className="btn btn-success" onClick={()=>this.updateInterviewerClicked(interviewer.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteInterviewerClicked(interviewer.id)}>Delete</button></td>
                                </tr>
                            
                                )}
                        
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addInterviewerClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}
export default InterviewerComponent;