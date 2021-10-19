import axios from "axios"
class InterviewDataService{
    retrieveAllInterviews(){
        return axios.get('http://localhost:9191/api/interview/schedule')
    }
   updateInterview(id,interview){
     console.log(interview)
         return (axios.put(`http://localhost:9191/api/interview/update/${id}`,interview))
    }
    createInterview(interview){
        console.log(interview)
        return axios.post('http://localhost:9191/api/interview/add',interview)
    }
    deleteInterview(interview_id){
        return axios.delete(`http://localhost:9191/api/interview/delete/${interview_id}`)
    }
    retrieveInterview(id){
        return axios.get(`http://localhost:9191/api/interview/schedule/${id}`)
    }
}

export default new InterviewDataService();