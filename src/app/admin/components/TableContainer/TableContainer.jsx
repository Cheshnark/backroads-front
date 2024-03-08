'use client'

import { useState } from 'react'

import UsersTable from '../UsersTable/UsersTable'
import SheltersTable from '../SheltersTable/SheltersTable'
import { deleteUsers, patchUsers } from '../../utils/adminAxios'

const TableContainer = ({ usersArr }) => {
  const [showUsers, setShowUsers] = useState(true)
  const [users, setUsers] = useState(usersArr)
  const [error, setError] = useState(null)

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
          <SheltersTable />)
      }
    </>
  )
}

export default TableContainer
