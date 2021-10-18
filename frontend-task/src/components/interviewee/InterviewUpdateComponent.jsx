// import {Component} from "react";
// import { ErrorMessage, Field, Formik } from "formik"
// import { Form } from "formik"
// import IntervieweeDataService from "../../api/interviewee/IntervieweeDataService";

// class IntervieweUpdateComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state={
            
//             id:this.props.match.params.id,
//             name :'',
//             skills:'',
//             experience:'',
//             qualification:''
            
//         };
//         this.onSubmit=this.onSubmit.bind(this)
        
//     }
//    componentDidMount(){
//         if(this.state.id==-1){
//             return
//         }
//         else{
//         console.log('retrieving one ')
//         IntervieweeDataService.retrieveInterviewee(this.state.id)
//         .then(response =>//console.log(response.data.result.name)
//         //console.log(response.data.result.skills)
//             this.setState({
//             name: response.data.result.name,
//             skills: response.data.result.skills,
//             experience: response.data.result.experience,
//             qualification: response.data.result.qualification

//         })
        
//         )
//         console.log(this.state)
//     }
//     }
//     onSubmit(values){
//         if(this.state.id===-1){
//             this.setState({id:Math.random()})
//         }
//         let interviewee = {
//             id:this.state.id,
//             name: values.name,
//             skills: values.skills,
//             experience: values.experience,
//             qualification: values.qualification

//         }
//         if(this.state.id==-1){
//             //console.log("enter")
//             IntervieweeDataService.createInterviewee(interviewee).then(
//                 ()=> {
                    
//                     this.props.history.push('/interviewees')
//                 }
//             )

//         }else{
//             IntervieweeDataService.updateInterviewee(this.state.id,interviewee).then(
//                 ()=> {
//                     this.props.history.push('/interviewees')
//                 }
//             )

//         }
//     }
   
//     render(){
//         let {scheduled_time,status,interviewee,positions,rounds,interviewer}=this.state
//         //let skills=this.state.skills
//         //let experience=this.state.experience
//         //let qualification=this.state.qualification
//         return (
//         <div>
//             <h1>Interview</h1>
//             <div className="container">
//                 <Formik initialValues={{scheduled_time,status,interviewee,positions,rounds,interviewer} }
//                 onSubmit={this.onSubmit}
//                 enableReinitialize={true} >
//                     {
//                         (props)=>(
//                         <Form>
//                             <fieldset className="form-group">
//                                 <label>Scheduled_time</label>
//                                 <Field className="form-control" type="date" name="time"></Field>
//                             </fieldset>
                            
//                             <fieldset className="form-group">
//                                 <label>Status</label>
//                                 <Field className="form-control" type="text" name="status"></Field>
//                             </fieldset>
//                             <h5>Interviewee</h5>
//                             <fieldset className="form-group">
//                                 <label>Interviewee_id</label>
//                                 <Field className="form-control" type="text" name="interviewee.id"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Name</label>
//                                 <Field className="form-control" type="text" name="interviewee.name"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Skills</label>
//                                 <Field className="form-control" type="text" name="interviewee.skills"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Experience</label>
//                                 <Field className="form-control" type="text" name="interviewee.experience"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Qualification</label>
//                                 <Field className="form-control" type="text" name="interviewee.qualification"></Field>
//                             </fieldset>
//                             <h5>Positions</h5>
//                             <fieldset className="form-group">
//                                 <label>Position_id</label>
//                                 <Field className="form-control" type="text" name="positions.id"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Title</label>
//                                 <Field className="form-control" type="text" name="positions.title"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Description</label>
//                                 <Field className="form-control" type="text" name="positions.description"></Field>
//                             </fieldset>
//                             <h5>Rounds</h5>

//                             <fieldset className="form-group">
//                                 <label>Round_id</label>
//                                 <Field className="form-control" type="text" name="rounds.id"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Name</label>
//                                 <Field className="form-control" type="text" name="rounds.name"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Sequence</label>
//                                 <Field className="form-control" type="text" name="rounds.sequence"></Field>
//                             </fieldset>
//                             <h5>Interviewer</h5>

//                             <fieldset className="form-group">
//                                 <label>Interviewer_id</label>
//                                 <Field className="form-control" type="text" name="interviewer.id"></Field>
//                             </fieldset>
//                             <fieldset className="form-group">
//                                 <label>Name</label>
//                                 <Field className="form-control" type="text" name="interviewer.name"></Field>
//                             </fieldset>
//                             <button className="btn btn-success" type="submit">Save</button>
                            
                            
//                         </Form>
                        
                        

//                         )
                        
                            
                        

//                     }
//                 </Formik>
//             </div>
//             </div>
//         )
//     }
// }
// export default IntervieweUpdateComponent