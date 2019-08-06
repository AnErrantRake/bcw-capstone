import axios from 'axios'

let _googleGeocodingApi = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.WAFL_GOOGLE_API_KEY}`,
  timeout: 3000
})

export default _googleGeocodingApi;