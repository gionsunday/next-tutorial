"use client"

import React from 'react'
import { Card } from '@/components/Card'

const Users = () => {
  const [users, setUsers] = React.useState([])


  React.useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')

        const data = await response.json()

        setUsers(data)

      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }


    fetchUsers()
  }, [])

  
  return users.length == 0 ?
    (
      <Card>No user Found!</Card>
    ) : (
      <Card className="gap-6 !flex-col">
        {
          users.map((user) => (
            <div key={user.name} className='font-bold flex gap-4 !flex-col text-center'>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))
        }
      </Card>
    )



}

export default Users
