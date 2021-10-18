import {Component} from "react";
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "formik"
import IntervieweeDataService from "../../api/interviewee/IntervieweeDataService";

class IntervieweeUpdateComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            id:this.props.match.params.id,
            name :'',
            skills:'',
            experience:'',
            qualification:''
            
        };
        this.onSubmit=this.onSubmit.bind(this)
        
    }
   componentDidMount(){
        if(this.state.id==-1){
            return
        }
        else{
        console.log('retrieving one ')
        IntervieweeDataService.retrieveInterviewee(this.state.id)
        .then(response =>//console.log(response.data.result.name)
        //console.log(response.data.result.skills)
            this.setState({
            name: response.data.result.name,
            skills: response.data.result.skills,
            experience: response.data.result.experience,
            qualification: response.data.result.qualification

        })
        
        )
        console.log(this.state)
    }
    }
    onSubmit(values){
        if(this.state.id===-1){
            this.setState({id:Math.random()})
        }
        let interviewee = {
            id:this.state.id,
            name: values.name,
            skills: values.skills,
            experience: values.experience,
            qualification: values.qualification

        }
        if(this.state.id==-1){
            //console.log("enter")
            IntervieweeDataService.createInterviewee(interviewee).then(
                ()=> {
                    
                    this.props.history.push('/interviewees')
                }
            )

        }else{
            IntervieweeDataService.updateInterviewee(this.state.id,interviewee).then(
                ()=> {
                    this.props.history.push('/interviewees')
                }
            )

        }
    }
    render(){
        let {name,skills,experience,qualification}=this.state
        //let skills=this.state.skills
        //let experience=this.state.experience
        //let qualification=this.state.qualification
        return (
        <div>
            <h1>Interviewee</h1>
            <div className="container">
                <Formik initialValues={{name,skills,experience,qualification}} 
                onSubmit={this.onSubmit}
                enableReinitialize={true} >
                    {
                        (props)=>(
                        <Form>
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field className="form-control" type="text" name="name"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Skills</label>
                                <Field className="form-control" type="text" name="skills"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Experience</label>
                                <Field className="form-control" type="text" name="experience"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Qualification</label>
                                <Field className="form-control" type="text" name="qualification"></Field>
                            </fieldset>
                            
                            <button className="btn btn-success" type="submit">Save</button>

                        </Form>
                        )
                    }
                </Formik>
            </div>
            </div>
        )
    }
}
export default IntervieweeUpdateComponent