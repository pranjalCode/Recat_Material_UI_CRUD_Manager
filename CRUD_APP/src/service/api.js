import axios from 'axios';


const user_api_url = 'http://127.0.0.1:3002/user'

export const addUser= async (data) => {
    try{
       return await axios.post(`${user_api_url}`, data)
    } catch(error) {
        console.log("Error while callimg API");
    }
   
}

export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${user_api_url}/${id}`);
    } catch (error) {
        console.log("Error while calling getUsers api ");
    }
}

export const getUser = async (data) => {
    
    try {
        return await axios.get(`${user_api_url}/${data}`);
    } catch (error) {
        console.log("Error while calling getUsers api ");
    }
}

export const deleteUser = async (id) => {
    return await axios.delete(`${user_api_url}/${id}`);
}

export const editUser = async (id, data) => {
    try{
        return await axios.put(`${user_api_url}/${id}`, data)
    } catch{
        console.log("Error while calling getUsers api ");
    }
    
}

