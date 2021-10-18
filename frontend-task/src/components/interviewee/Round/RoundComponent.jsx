import React,{Component} from "react";
import RoundDataService from "../../../api/interviewee/RoundDataService";

class RoundComponent extends Component{
     
    constructor(props){
        super(props)
        this.state={
            //status:'ok',
            //message:'hii',
            results :
            [
               
                
            ]
            
        };
        this.addRoundClicked=this.addRoundClicked.bind(this)
        this.refreshRounds=this.refreshRounds.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.updateRoundClicked=this.updateRoundClicked.bind(this)
        this.deleteRoundClicked=this.deleteRoundClicked.bind(this)
    }

    componentDidMount(){
        this.refreshRounds();
        console.log(this.state);
    }

    refreshRounds(){
        
        RoundDataService.retrieveAllRound()
        .then(response => this.setState({
            results: response.data.result
        }))
        
    }

    deleteRoundClicked(id){
        
        RoundDataService.deleteRound(id)
        .then(
            response=>{
               
                this.refreshRounds()
            }
        )

    }
    addRoundClicked(){
        
        this.props.history.push(`/roundupdate/-1`)
        

    }

    updateRoundClicked(id){
        this.props.history.push(`/roundupdate/${id}`)

    }
    render(){
        return(
            <div>
                <h1>List of Round</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Sequence</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                            
                                {this.state.results.map(round =>
                                <tr >
                                    
                                    <td>{round.name}</td>
                                    <td>{round.sequence}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateRoundClicked(round.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteRoundClicked(round.id)}>Delete</button></td>
                                </tr>
                            
                                )}
                        
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addRoundClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}
export default RoundComponent;