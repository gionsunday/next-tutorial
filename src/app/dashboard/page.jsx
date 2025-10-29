"use client"

import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Card } from '@/components/Card'
import axios from 'axios';

const DashboardPage = () => {
  const { handleLogout } = useAuth();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleAddUser = async () => {

    try {
      const response = await axios.post('/api/users', { name, email });
      console.log('User added:', response.data);
      
    } catch (error) {
      console.error('Error adding user:', error);
    }
    
  }

  return (
    <div className='text-2xl w-full flex items-center justify-between   font-bold p-2 m-2'>
      Dashboard Page

      <Card>
        <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} className="px-4 py-2 border rounded" />
        <input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 border rounded" />

        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </Card>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  )
}

export default DashboardPage