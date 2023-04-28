import axios from "axios";
const backend_url = "http://localhost/pirates-backend";

export function post({route, data, callback}){
    axios.post(backend_url + route,data).then(
        (response) =>{
            callback(response);
        }
    );
};

export function get({route, callback}){
    axios.get(backend_url + route).then(
        (response) => {
            callback(response);
        }
    );
}

export function getToken(){
    var unParsedToken = localStorage.getItem("pirates-token");
    if(unParsedToken == null) return false;
    var token = JSON.parse(unParsedToken);
    return token;
}

export function isCurrentUserAdmin(){
    var unParsedToken = localStorage.getItem("pirates-token");
    if(unParsedToken == null) return false;
    var token = JSON.parse(unParsedToken);
    return token.role == "admin";
}

export function isLoggedIn(){
    var unParsedToken = localStorage.getItem("pirates-token");
    return unParsedToken != null
}