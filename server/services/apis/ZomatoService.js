import axios from 'axios'

let _zomatoService = axios.create({
  baseURL: 'https://yesno.wtf/api',
  timeout: 3000
})

export default _zomatoService;