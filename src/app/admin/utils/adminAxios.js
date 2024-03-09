import axios from 'axios'

// User requests
export const getUsers = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/user/users')
    const data = await res.data

    if (!data) {
      return { status: 400, message: 'Error fetching data' }
    }

    return data.data
  } catch (error) {
    return { status: 400, message: 'Error fetching data' }
  }
}

export const patchUsers = async (id, role) => {
  try {
    const res = await axios.patch(`http://127.0.0.1:8000/api/user/users/${id}`, { role })
    const data = await res.data

    if (!data) {
      return { status: 400, message: 'Error fetching update' }
    }

    return { status: 200, message: 'Successful fetch' }
  } catch (error) {
    return { status: 400, message: 'Update failed' }
  }
}

export const deleteUsers = async (id) => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/api/user/users/${id}`)
    const data = await res.data

    if (!data) {
      return { status: 400, message: 'Error fetching delete' }
    }

    console.log(data)
    return { status: 200, message: 'Successful fetch' }
  } catch (error) {
    return { status: 400, message: 'Delete failed' }
  }
}

// Shelter request
export const getShelters = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/location/locations')
    const data = await res.data

    if (!data) {
      return { status: 400, message: 'Error fetching data' }
    }

    return data.data
  } catch (error) {
    return { status: 400, message: 'Error fetching data' }
  }
}

export const patchShelter = async (id, shelter) => {
  console.log(shelter)

  try {
    const res = await axios.patch(`http://127.0.0.1:8000/api/location/locations/${id}`, shelter)
    const data = await res.data

    if (!data) {
      return { status: 400, message: 'Error fetching update' }
    }

    return { status: 200, message: 'Successful fetch' }
  } catch (error) {
    return { status: 400, message: 'Update failed' }
  }
}

export const deleteShelter = async (id) => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/api/location/locations/${id}`)
    const data = await res.data

    if (!data) {
      return { status: 400, message: 'Error fetching delete' }
    }

    return { status: 200, message: 'Successful fetch' }
  } catch (error) {
    return { status: 400, message: 'Delete failed' }
  }
}
