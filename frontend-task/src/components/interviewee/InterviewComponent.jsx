import React,{Component} from "react";
import InterviewDataService from "../../api/interviewee/InterviewDataService";
import moment from "moment"

class InterviewComponent extends Component{
     
    constructor(props){
        super(props)
        this.state={
            //status:'ok',
            message:'',
            results :
            [
               //{id:26,'name':'Krish',skills:'C++',experience:'2 years in anblicks company',qualification:'B.Tech'}
                
            ]
            
        };
        this.addInterviewClicked=this.addInterviewClicked.bind(this)
        this.refreshInterviews=this.refreshInterviews.bind(this)
        
        this.updateInterviewClicked=this.updateInterviewClicked.bind(this)
        this.deleteInterviewClicked=this.deleteInterviewClicked.bind(this)
    }

    componentDidMount(){
        this.refreshInterviews();
       // console.log(this.state);
    }

    refreshInterviews(){
        
        InterviewDataService.retrieveAllInterviews()
        .then(response => this.setState({
            results: response.data.result,
            //message:response.data.message
        }))
        
    }

    deleteInterviewClicked(interview_id){
        
        InterviewDataService.deleteInterview(interview_id)
        .then(
            response=>{
                this.setState({message:`Delete of interview ${interview_id}`})
                this.refreshInterviews()
            }
        )

    }
    addInterviewClicked(){
        
        this.props.history.push(`/interview_update/${-1}`)
        

    }

    updateInterviewClicked(id){
        this.props.history.push(`/interview_update/${id}`)

    }
    render(){
        return(
            <div>
                <h1>List of Interviews</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            {/*<th>Scheduled_Time</th>*/}
                            <th>Status</th>
                            {/*<th>Is_Deleted</th>*/}
                            <th>Interview_id</th>
                            <th>Position_id</th>
                            <th>Round_id</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                                {this.state.results.map(interview =>
                                //{console.log(interview)}
                                <tr >
                                    
                                    {/*<td>{moment(interview.time).format('YYYY-MM-DD')}</td>*/}
                                    <td>{interview.status}</td>
                                    {/*<td>{interview.isDeleted}</td>*/}
                                    <td>{interview.interviewee.id}</td>
                                    <td>{interview.positions.id}</td>
                                    <td>{interview.rounds.id}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateInterviewClicked(interview.interview_id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteInterviewClicked(interview.interview_id)}>Delete</button></td>
                                </tr>
                            
                                )}
                        
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addInterviewClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}
export default InterviewComponent;