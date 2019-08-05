import axios from 'axios'

let _googlePlacesApi = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.GOOGLE_API_KEY}`,
  timeout: 3000
})

export default _googlePlacesApi;