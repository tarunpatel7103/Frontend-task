import axios from "axios"
class RoundDataService{
    
    retrieveAllRound(){
        console.log("retrive all possition");
        return axios.get('http://localhost:9191/api/round/list')
       
    }
    //localhost:9191/api/round/update/19
    updateRound(id,round){
        return axios.put(`http://localhost:9191/api/round/update/${id}`,round)
       
    }
    
    createRound(round){
        console.log(round);
        return axios.post('http://localhost:9191/api/round/add',round)
       
    }
    deleteRound(id){
        return axios.delete(`http://localhost:9191/api/round/delete/${id}`)
       
    }
    retrieveRound(id){
        return axios.get(`http://localhost:9191/api/round/view/${id}`)
       
    }
    
}
export default new RoundDataService();