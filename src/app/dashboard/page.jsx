"use client"

import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Card } from '@/components/Card'
import axios from 'axios';

import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);


const data = {
  labels: ["Paid", "Pending", "Cancelled"],
  datasets: [
    {
      data: [32, 12, 56],
      backgroundColor: ["#22c55e", "#3b82f6", "#efd544"],
    },
  ],
};

export function DashboardEarningChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h2 className="text-lg font-semibold mb-3">Earnings Analysis</h2>
      <Pie data={data} />
    </div>
  );
}

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

        <DashboardEarningChart />

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