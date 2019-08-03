import axios from 'axios'

let _yelpService = axios.create({
  baseURL: 'https://yesno.wtf/api',
  timeout: 3000
})

export default _yelpService;