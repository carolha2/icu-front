import axios from 'axios';

const API_URL = 'https://auth-icu.herokuapp.com/registration/';

class RegisterService {
    register(dob, email, gender, name, password, phonenumber, username) {
        return axios.post(API_URL + "register", {
          dob,
          email,
          gender,
          name,
          password,
          phonenumber,
          username,
        });
      }
      confirm(email , token){
        return axios.post(API_URL + "registrationconfirm" , null,{ params: {
          email,
          token
        }})
      }
      resend(email){
        return axios.get(API_URL + "resendEmail" ,{ params: {
          email
        }})
      }
}
export default new RegisterService();
