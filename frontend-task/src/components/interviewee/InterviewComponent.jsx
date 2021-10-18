// import React,{Component} from "react";
// import InterviewDataService from "../../api/interviewee/InterviewDataService";

// class IntervieweComponent extends Component{
     
//     constructor(props){
//         super(props)
//         this.state={
//             //status:'ok',
//             //message:'hii',
//             results :
//             [
               
                
//             ]
            
//         };
//         this.addIntervieweClicked=this.addIntervieweClicked.bind(this)
//         this.refreshInterviewes=this.refreshInterviewes.bind(this)
//         this.componentDidMount=this.componentDidMount.bind(this)
//         this.updateIntervieweClicked=this.updateIntervieweClicked.bind(this)
//         this.deleteIntervieweClicked=this.deleteIntervieweClicked.bind(this)
//     }

//     componentDidMount(){
//         this.refreshInterviewees();
//         console.log(this.state);
//     }

//     refreshInterviewes(){
        
//         InterviewDataService.retrieveAllInterviews()
//         .then(response => this.setState({
//             results: response.data.result
//         }))
        
//     }

//     deleteIntervieweClicked(id){
        
//         InterviewDataService.deleteInterview(id)
//         .then(
//             response=>{
               
//                 this.refreshInterviewes()
//             }
//         )

//     }
//     addIntervieweClicked(){
        
//         this.props.history.push(`/interviewupdate/-1`)
        

//     }

//     updateIntervieweClicked(id){
//         this.props.history.push(`/interviewupdate/${id}`)

//     }
//     render(){
//         return(
//             <div>
//                 <h1>List of Interviews</h1>
//                 <div className="container">
//                 <table className="table">
//                     <thead>
//                         <tr>
                            
//                             <th>Scheduled_Time</th>
//                             <th>Status</th>
//                             {/*<th>Is_Deleted</th>*/}
//                             <th>Interview_id</th>
//                             <th>Position_id</th>
//                             <th>Round_id</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                            
//                                 {this.state.results.map(interview =>
//                                 <tr >
                                    
//                                     <td>{moment(interview.time).format('YYYY-MM-DD')}</td>
//                                     <td>{interview.status}</td>
//                                     {/*<td>{interview.isDeleted}</td>*/}
//                                     <td>{interview.interviewee.id}</td>
//                                     <td>{interview.positions.id}</td>
//                                     <td>{interview.rounds.id}</td>
//                                     <td><button className="btn btn-success" onClick={()=>this.updateInterviewClicked(interview.interview_id)}>Update</button></td>
//                                     <td><button className="btn btn-warning" onClick={()=>this.deleteInterviewClicked(interview.interview_id)}>Delete</button></td>
//                                 </tr>
                            
//                                 )}
                        
//                     </tbody>
//                 </table>
//                 <div className="row">
//                     <button className="btn btn-success" onClick={this.addInterviewClicked}>Add</button>
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default IntervieweComponent;