import React from 'react'
import { Card } from '@/components/Card'
import Link from 'next/link';

const Notifications = async () => {

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <Card>
      Archived Notifications Components
      <Link href="/dashboard" className='ml-4 text-blue-800 underline'>Default</Link>
    </Card>
  )
}

export default Notifications