"use client"
// import { ServerOnly } from '@/lib/ServerOnly'
// import InterComponent from './InterComponent'
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"



export default function ClientOnlyPage() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    // const content = ServerOnly()
    return (
        <div>
            <h1 className="text-2xl font-bold"> Users</h1>
             {
                loading && users?.length === 0 ? (
                <p>No users found.</p>

                ) : (
                    <ul>    
                        {users.map(user => (
                            <li key={user.id} className="border-b py-2">
                                {user.name} - {user.email}
                            </li>
                        ))}
                    </ul>
                )
             }
            {/* <h1>Client Only Page</h1>
            {/* <h1>{content}</h1> 
            <InterComponent  /> */}
        </div>
    )
}