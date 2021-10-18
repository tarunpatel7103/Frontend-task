import React,{Component} from "react";

import PositionDataService from "../../../api/interviewee/PositionDataService.js";
class PositionComponent extends Component{
     
    constructor(props){
        super(props)
        this.state={
            //status:'ok',
            //message:'hii',
            results :
            [
               
                
            ]
            
        };
        this.addPositionClicked=this.addPositionClicked.bind(this)
        this.refreshPositions=this.refreshPositions.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.updatePositionClicked=this.updatePositionClicked.bind(this)
        this.deletePositionClicked=this.deletePositionClicked.bind(this)
    }

    componentDidMount(){
        this.refreshPositions();
        console.log(this.state);
    }

    refreshPositions(){
        
        PositionDataService.retrieveAllPosition()
        .then(response => this.setState({
            results: response.data.result
        }))
        
    }

    deletePositionClicked(id){
        
        PositionDataService.deletePosition(id)
        .then(
            response=>{
               
                this.refreshPositions()
            }
        )

    }
    addPositionClicked(){
        
        this.props.history.push(`/positionupdate/${-1}`)
        

    }

    updatePositionClicked(id){
        this.props.history.push(`/positionupdate/${id}`)

    }
    render(){
        return(
            <div>
                <h1>List of Positions</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>Title</th>
                            <th>Descripton</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                                {this.state.results.map(position =>
                                <tr >
                                    
                                    <td>{position.title}</td>
                                    <td>{position.description}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updatePositionClicked(position.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deletePositionClicked(position.id)}>Delete</button></td>
                                </tr>
                            
                                )}
                        
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addPositionClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}
export default PositionComponent;