import axios from "axios";

    const API = axios.create({
        baseURL:"htt://localhost:3000"
    })
;

export default API;