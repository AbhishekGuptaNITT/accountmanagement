import axios from 'axios'

let instance = axios.create({
    baseURL:'https://accounts-7c13e-default-rtdb.firebaseio.com/',
})

export default instance