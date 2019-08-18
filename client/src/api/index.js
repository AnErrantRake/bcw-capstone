import Axios from 'axios'

//Allows axios to work locally or live
export const base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : 'https://wafl.herokuapp.com/'

export const api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})
