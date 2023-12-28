import React from "react";
import axios from "axios";

const authenticateByTokenUrl = "http://localhost:8080/api/authenticate/";



class AuthenticateService {

    authenticateByToken(userForm) {
        return axios.get(authenticateByTokenUrl + userForm);
    }


}

export default new AuthenticateService();