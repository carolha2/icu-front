import axios from "axios";

const API_URL = "https://auth-icu.herokuapp.com/api/auth/";

class AuthService {
  login(username, password) {
    return axios
    .post(API_URL + "login", {
      username,
      password
    }
    )
    .then(response => { 
      console.log(response.data.success);
      console.log(response.data.result);
      // console.log(response.data.result.user.username);
      if (response.data.result.token) {
          localStorage.setItem("user", JSON.stringify(response.data.result));
          console.log(localStorage.getItem("user"))
          // localStorage.setItem("token", JSON.stringify(response.data.result.token));
          // console.log(localStorage.getItem("token"))
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
