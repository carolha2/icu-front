import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/employees';
const PERSON_API ='https://auth-icu.herokuapp.com/api/person/';
const BRANCH_API ='https://auth-icu.herokuapp.com/api/branch/';

class UserService {

   getEmployees() {
     return axios.get(API_URL, { headers: authHeader() });
   }
   createPerson(person){
    return axios.post(PERSON_API + 'add' , person , { headers: authHeader() });
   }
   createBranch(branch){
    return axios.post(BRANCH_API + 'add' , branch , { headers: authHeader() });
   }
   getPersonById(personId){
    return axios.get(PERSON_API + personId, { headers: authHeader() });
   }
   updateEmployee(employee , employeeId){
    return axios.put(API_URL + '/' + employeeId, employee , { headers: authHeader() });
   }
   deleteEmployee(employeeId){
    return axios.delete(API_URL + '/' + employeeId , { headers: authHeader() });
   }
   deletePerson(personID){
    return axios.delete(PERSON_API + personID , { headers: authHeader() });
   }
}

export default new UserService();
