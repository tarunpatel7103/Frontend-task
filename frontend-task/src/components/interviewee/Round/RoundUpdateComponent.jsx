import {Component} from "react";
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "formik"
import RoundDataService from "../../../api/interviewee/RoundDataService";

class RoundUpdateComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            id:this.props.match.params.id,
            name :'',
            sequence:'',
          
            
        };
        this.onSubmit=this.onSubmit.bind(this)
        
    }
   componentDidMount(){
        if(this.state.id==-1){
            return
        }
        else{
        console.log('retrieving one ')
        RoundDataService.retrieveRound(this.state.id)
        .then(response =>//console.log(response.data.result.name)
        //console.log(response.data.result.skills)
            this.setState({
            name: response.data.result.name,
            sequence: response.data.result.sequence,
           

        })
        
        )
        console.log(this.state)
    }
    }
    onSubmit(values){
        if(this.state.id===-1){
            this.setState({id:Math.random()})
        }
        let round = {
            id:this.state.id,
            name: values.name,
            sequence: values.sequence,
           
        }
        if(this.state.id==-1){
            //console.log("enter")
            RoundDataService.createRound(round).then(
                ()=> {
                    
                    this.props.history.push('/round')
                }
            )

        }else{
            RoundDataService.updateRound(this.state.id,round).then(
                ()=> {
                    this.props.history.push('/round')
                }
            )

        }
    }
    render(){
        let {name,sequence}=this.state
        //let skills=this.state.skills
        //let experience=this.state.experience
        //let qualification=this.state.qualification
        return (
        <div>
            <h1>Interviewee</h1>
            <div className="container">
                <Formik initialValues={{name,sequence}} 
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
                                <label>Sequence</label>
                                <Field className="form-control" type="text" name="sequence"></Field>
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
export default RoundUpdateComponent