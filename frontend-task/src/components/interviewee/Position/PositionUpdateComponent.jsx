import {Component} from "react";
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "formik"
import PositionDataService from "../../../api/interviewee/PositionDataService";

class PositionUpdateComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            id:this.props.match.params.id,
            title :'',
            description:'',
            
            
        };
        this.onSubmit=this.onSubmit.bind(this)
        
    }
   componentDidMount(){
        if(this.state.id==-1){
            return
        }
        else{
        console.log('retrieving one ')
        PositionDataService.retrievePosition(this.state.id)
        
        .then(response =>//console.log(response.data.result.name)
        //console.log(response.data.result.skills)
            this.setState({
            title: response.data.result.title,
            description: response.data.result.description,
            

        })
        
        )
        console.log(this.state)
    }
    }
    onSubmit(values){
        if(this.state.id===-1){
            this.setState({id:Math.random()})
        }
        let position = {
            id:this.state.id,
            title: values.title,
            description: values.description,
            

        }
        if(this.state.id==-1){
            //console.log("enter")
            PositionDataService.createPosition(position).then(
                ()=> {
                    this.props.history.push('/position')
                }
            )
           

        }else{
            PositionDataService.updatePosition(this.state.id,position).then(
                ()=>{
                    this.props.history.push('/position')
                }
            )
           

        }
    }
    render(){
        let {title,description}=this.state
        //let skills=this.state.skills
        //let experience=this.state.experience
        //let qualification=this.state.qualification
        return (
        <div>
            <h1>Position</h1>
            <div className="container">
                <Formik initialValues={{title,description}} 
                onSubmit={this.onSubmit}
                enableReinitialize={true} >
                    {
                        (props)=>(
                        <Form>
                            <fieldset className="form-group">
                                <label>Title</label>
                                <Field className="form-control" type="text" name="title"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Skills</label>
                                <Field className="form-control" type="text" name="description"></Field>
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
export default PositionUpdateComponent