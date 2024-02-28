import axios from 'axios'

export const reverseGeocode = async (lat, lng) => {
  console.log(lat)
  const res = await axios.get(`https://geocode.maps.co//reverse?lat=${lat}&lon=${lng}&api_key=${process.env.NEXT_PUBLIC_GEOCODING_KEY}`)
  const data = await res.data

  if (!data) {
    return { error: 'Reverse geocode fetch failed' }
  }

  return data.display_name
}
