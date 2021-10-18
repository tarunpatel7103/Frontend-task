import React,{Component} from "react";
import IntervieweeDataService from "../../api/interviewee/IntervieweeDataService.js";

class IntervieweeComponent extends Component{
     
    constructor(props){
        super(props)
        this.state={
            //status:'ok',
            //message:'hii',
            results :
            [
               
                
            ]
            
        };
        this.addIntervieweeClicked=this.addIntervieweeClicked.bind(this)
        this.refreshInterviewees=this.refreshInterviewees.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.updateIntervieweeClicked=this.updateIntervieweeClicked.bind(this)
        this.deleteIntervieweeClicked=this.deleteIntervieweeClicked.bind(this)
    }

    componentDidMount(){
        this.refreshInterviewees();
        console.log(this.state);
    }

    refreshInterviewees(){
        
        IntervieweeDataService.retrieveAllInterviewees()
        .then(response => this.setState({
            results: response.data.result
        }))
        
    }

    deleteIntervieweeClicked(id){
        
        IntervieweeDataService.deleteInterviewee(id)
        .then(
            response=>{
               
                this.refreshInterviewees()
            }
        )

    }
    addIntervieweeClicked(){
        
        this.props.history.push(`/update/-1`)
        

    }

    updateIntervieweeClicked(id){
        this.props.history.push(`/update/${id}`)

    }
    render(){
        return(
            <div>
                <h1>List of Interviewees</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Skills</th>
                            <th>Experience</th>
                            <th>Qualification</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                                {this.state.results.map(interviewee =>
                                <tr >
                                    
                                    <td>{interviewee.name}</td>
                                    <td>{interviewee.skills}</td>
                                    <td>{interviewee.experience}</td>
                                    <td>{interviewee.qualification}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateIntervieweeClicked(interviewee.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteIntervieweeClicked(interviewee.id)}>Delete</button></td>
                                </tr>
                            
                                )}
                        
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addIntervieweeClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}
export default IntervieweeComponent;