
import axios from 'axios'

let _googlePlacesApi = axios.create({
  baseURL: 'https://yesno.wtf/api',
  timeout: 3000
})

export default _googlePlacesApi;