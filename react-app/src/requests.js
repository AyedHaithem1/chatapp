import axios from 'axios';

const API_ROOT = "http://23.100.12.139:8002"

axios.defaults.baseURL = API_ROOT;

export const fetchUsers = () => {
    return axios.get(`/users`)
    .then(res => res.data.data)
}