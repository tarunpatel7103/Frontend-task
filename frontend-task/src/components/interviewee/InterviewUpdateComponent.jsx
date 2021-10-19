import {Component} from "react";
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "formik"
import InterviewDataService from "../../api/interviewee/InterviewDataService";
import moment from "moment"
class InterviewUpdateComponent extends Component{
    constructor(props){
        super(props)
        this.state=
        {
            
            interview_id:Number(this.props.match.params.id),
            //scheduled_time :moment(Date.now()).format('YYYY-MM-DDTHH:MM:SS.000+0000'),
            time:moment(new Date()).format('YYYY-MM-DDTHH:MM:SS.000+0000'),
            
            isDeleted:false,
            status:'',
            interviewee:
                {
                id:'',
                name:'',
                skills:'',
                experience:'',
                qualification:''
                },
            
            positions:{
                id:'',
                title:'',
                description:''
            },
            rounds:
            {
                id:'',
                name:'',
                seq:''
            },
            interviewer:
            {
                id:'',
                name:''
            }
            
            
            
        };
        this.onSubmit=this.onSubmit.bind(this)
        
        
        
    }
    
   componentDidMount(){
        if(this.state.interview_id==-1){
            return
        }
        else{
        console.log('retrieving one ')
        InterviewDataService.retrieveInterview(this.state.interview_id)
        .then(response =>
            this.setState({
            
            time: response.data.result.time,
            status: response.data.result.status,
            interviewee: response.data.result.interviewee,
            positions: response.data.result.positions,
            rounds: response.data.result.rounds,
            interviewer: response.data.result.interviewer
        })
        
        )
        
        
    }
    }
    componentDidUpdate(){
        
        //InterviewDataService.updateInterview(this.state.interview_id,this.state)
        
        
    }
    refreshInterviews(){
        
        InterviewDataService.retrieveAllInterviews()
        
        
    }
    onSubmit(values){
        this.setState({
                    
            //time:moment(values.time).format('YYYY-MM-DDTHH:MM:SS.000+0000'),
            time:values.time,
            status: values.status,
            interviewee: values.interviewee,
            positions: values.positions,
            rounds: values.rounds,
            interviewer: values.interviewer
        })
        if(this.state.interview_id==-1){
            
            
            
            this.setState({interview_id:Math.random()})
            
            InterviewDataService.createInterview(this.state)
            
            this.props.history.push('/interviews')
            
            
        }
        else{
           
            InterviewDataService.updateInterview(this.state.interview_id,this.state)
           this.props.history.push('/interviews')
           
            }
            
        }
    
   
    render(){
        let {time,status,interviewee,positions,rounds,interviewer}=this.state
        
        return (
        <div>
            <h1>Interview</h1>
            <div className="container">
                <Formik initialValues={{time,status,interviewee,positions,rounds,interviewer} }
                onSubmit={this.onSubmit}
                enableReinitialize={true} >
                    {
                        (props)=>(
                        <Form>
                            <fieldset className="form-group">
                                <label>Scheduled_time</label>
                                <Field className="form-control" type="text" name="time" ></Field>
                            </fieldset>
                            
                            <fieldset className="form-group">
                                <label>Status</label>
                                <Field className="form-control" type="text" name="status"></Field>
                            </fieldset>
                            <h5>Interviewee</h5>
                            <fieldset className="form-group">
                                <label>Interviewee_id</label>
                                <Field className="form-control" type="text" name="interviewee.id"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field className="form-control" type="text" name="interviewee.name"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Skills</label>
                                <Field className="form-control" type="text" name="interviewee.skills"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Experience</label>
                                <Field className="form-control" type="text" name="interviewee.experience"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Qualification</label>
                                <Field className="form-control" type="text" name="interviewee.qualification"></Field>
                            </fieldset>
                            <h5>Positions</h5>
                            <fieldset className="form-group">
                                <label>Position_id</label>
                                <Field className="form-control" type="text" name="positions.id"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Title</label>
                                <Field className="form-control" type="text" name="positions.title"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="positions.description"></Field>
                            </fieldset>
                            <h5>Rounds</h5>
                            <fieldset className="form-group">
                                <label>Round_id</label>
                                <Field className="form-control" type="text" name="rounds.id"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field className="form-control" type="text" name="rounds.name"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Sequence</label>
                                <Field className="form-control" type="text" name="rounds.sequence"></Field>
                            </fieldset>
                            <h5>Interviewer</h5>
                            <fieldset className="form-group">
                                <label>Interviewer_id</label>
                                <Field className="form-control" type="text" name="interviewer.id"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field className="form-control" type="text" name="interviewer.name"></Field>
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
export default InterviewUpdateComponent