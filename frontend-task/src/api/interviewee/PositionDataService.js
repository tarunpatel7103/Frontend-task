import axios from "axios"
class PositionDataService{
    retrieveAllPosition(){
        console.log("retrive all possition");
        return axios.get('http://localhost:9191/api/position/list')
       
    }
    updatePosition(id,position){
        return axios.put(`http://localhost:9191/api/position/update/${id}`,position)
       
    }
    
    createPosition(position){
        console.log(position);
        return axios.post('http://localhost:9191/api/position/add',position)
       
    }
    deletePosition(id){
        return axios.delete(`http://localhost:9191/api/position/delete/${id}`)
       
    }
    retrievePosition(id){
        return axios.get(`http://localhost:9191/api/position/view/${id}`)
       
    }
    
}
export default new PositionDataService();