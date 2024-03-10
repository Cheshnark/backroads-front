'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import UsersTable from '../UsersTable/UsersTable'
import SheltersTable from '../SheltersTable/SheltersTable'
import { deleteShelter, deleteUsers, patchShelter, patchUsers } from '../../utils/adminAxios'
import UpdateShelterModal from '../UpdateShelterModal/UpdateShelterModal'
import useAuthStore from '@/stores/AuthStore'

const TableContainer = ({ usersArr, sheltersArr }) => {
  const [showUsers, setShowUsers] = useState(true)
  const [showUpdateShelter, setShowUpdateShelter] = useState(false)
  const [users, setUsers] = useState(usersArr)
  const [shelters, setShelters] = useState(sheltersArr)
  const [filteredShelter, setFilteredShelter] = useState(null)
  const [error, setError] = useState(null)

  const { session } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (session?.data?.type === 'user') {
      router.push('/')
    }
  }, [session])

  const onShowShelter = (id) => {
    const filteredShelter = shelters.filter(shelter => shelter.id === id)
    setFilteredShelter(filteredShelter[0])
    setShowUpdateShelter(true)
  }

  const updateUser = async (id) => {
    const foundUser = users.find(user => user.id === id)
    if (foundUser.type === 'user') {
      foundUser.type = 'admin'
    } else {
      foundUser.type = 'user'
    }

    setUsers(structuredClone(users))

    const patched = await patchUsers(id, foundUser.type)

    if (patched.status === 400) {
      setError(patched.message)
    }
  }

  const deleteUser = async (id) => {
    const filteredUsers = users.filter(user => user.id !== id)
    setUsers(filteredUsers)

    const deleted = await deleteUsers(id)

    if (deleted.status === 400) {
      setError(deleted.message)
    }
  }

  const updateShelter = async (id, values) => {
    const foundShelterIndex = shelters.findIndex(shelter => shelter.id === id)
    console.log(shelters[foundShelterIndex])

    shelters[foundShelterIndex].title = values.title
    shelters[foundShelterIndex].body = values.body
    shelters[foundShelterIndex].locationType = values.locationType
    shelters[foundShelterIndex].address = values.address
    shelters[foundShelterIndex].price = values.price
    shelters[foundShelterIndex].openingHours = values.openingHours
    shelters[foundShelterIndex].score = values.score

    setUsers(structuredClone(shelters))
    setShowUpdateShelter(false)

    const patched = patchShelter(id, values)

    if (patched.status === 400) {
      setError('Error updating shelter')
    }

    return true
  }

  const onDeleteShelter = async (id) => {
    const filteredShelters = shelters.filter(shelter => shelter.id !== id)
    setShelters(filteredShelters)

    const deleted = await deleteShelter(id)

    if (deleted.status === 400) {
      setError(deleted.message)
    }
  }

  return (
    <>
      <header className='flex justify-center '>
        <button onClick={() => setShowUsers(true)}>Users</button>
        <button onClick={() => setShowUsers(false)}>Shelters</button>
      </header>
      {showUsers
        ? (
          <UsersTable users={users} updateUser={updateUser} deleteUser={deleteUser} error={error} />)
        : (
          <SheltersTable shelters={shelters} error={error} onShowShelter={onShowShelter} onDeleteShelter={onDeleteShelter} />)
      }
      {showUpdateShelter &&
        <UpdateShelterModal setShowUpdateShelter={setShowUpdateShelter} updateShelter={updateShelter} filteredShelter={filteredShelter} />}
    </>
  )
}

export default TableContainer
