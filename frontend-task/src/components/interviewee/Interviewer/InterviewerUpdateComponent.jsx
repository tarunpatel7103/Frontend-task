import {Component} from "react";
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "formik"
import InterviewerDataService from "../../../api/interviewee/InterviewerDataService";

class InterviewerUpdateComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            id:this.props.match.params.id,
            name :'',
            
            
            
        };
        this.onSubmit=this.onSubmit.bind(this)
        
    }
   componentDidMount(){
        if(this.state.id==-1){
            return
        }
        else{
        console.log('retrieving one ')
        InterviewerDataService.retrieveInterviewer(this.state.id)
        
        
        .then(response =>//console.log(response.data.result.name)
        //console.log(response.data.result.skills)
            this.setState({
            name: response.data.result.name,
            

        })
        
        )
        console.log(this.state)
    }
    }
    onSubmit(values){
        if(this.state.id===-1){
            this.setState({id:Math.random()})
        }
        let interviewer = {
            id:this.state.id,
            name: values.name,
            
            

        }
        if(this.state.id==-1){
            //console.log("enter")
            InterviewerDataService.createInterviewer(interviewer).then(
                ()=> {
                    this.props.history.push('/interviewer')
                }
            )
           

        }else{
            InterviewerDataService.updateInterviewer(this.state.id,interviewer).then(
                ()=>{
                    this.props.history.push('/interviewer')
                }
            )
           

        }
    }
    render(){
        let {name}=this.state
        
        return (
        <div>
            <h1>Interviewer</h1>
            <div className="container">
                <Formik initialValues={{name}} 
                onSubmit={this.onSubmit}
                enableReinitialize={true} >
                    {
                        (props)=>(
                        <Form>
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field className="form-control" type="text" name="name"></Field>
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
export default InterviewerUpdateComponent