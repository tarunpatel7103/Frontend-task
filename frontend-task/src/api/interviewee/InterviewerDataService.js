import axios from "axios"
class InterviewerDataService{
    
    retrieveAllInterviewer(){
        console.log("retrive all possition");
        return axios.get('http://localhost:9191/api/interviewer/list')
       
    }
    //localhost:9191/api/round/update/19
    updateInterviewer(id,interviewer){
        console.log(interviewer);
        return axios.put(`http://localhost:9191/api/interviewer/update/${id}`,interviewer)
       
    }
  
    createInterviewer(interviewer){
        console.log(interviewer);
        return axios.post('http://localhost:9191/api/interviewer/add',interviewer)
       
    }
    deleteInterviewer(id){
        return axios.delete(`http://localhost:9191/api/interviewer/delete/${id}`)
       
    }
    retrieveInterviewer(id){
        return axios.get(`http://localhost:9191/api/interviewer/view/${id}`)
       
    }
    
}
export default new InterviewerDataService();