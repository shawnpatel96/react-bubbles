import axios from "axios"

const axiosWithAuth =()=>{
     // get the token from localstorage
    //  const token = localStorage.getItem('token');
       // create a new "instance" of axios with the config object built into it
    return axios.create({
        
        headers:{
            Authorization: localStorage.getItem('token')
        },
        baseURL: 'http://localhost:5000'
    });
};

export default axiosWithAuth
