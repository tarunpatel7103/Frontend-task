import axios from "axios"
class IntervieweeDataService{
    retrieveAllInterviewees(){
        
        return axios.get('http://localhost:9191/api/interviewee/list')
       
    }
    updateInterviewee(id,todo){
        return axios.put(`http://localhost:9191/api/interviewee/update/${id}`,todo)
       
    }
    createInterviewee(todo){
        return axios.post('http://localhost:9191/api/interviewee/add',todo)
       
    }
    deleteInterviewee(id){
        return axios.delete(`http://localhost:9191/api/interviewee/delete/${id}`)
       
    }
    retrieveInterviewee(id){
        return axios.get(`http://localhost:9191/api/interviewee/view/${id}`)
       
    }
    
}
export default new IntervieweeDataService();