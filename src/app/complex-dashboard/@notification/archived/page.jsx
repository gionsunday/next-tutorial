import React from 'react'
import { Card } from '../../../../components/Card'
import Link from 'next/link';

const ArchivedNotification = async () => {

    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (

        <Card>Archived Notification Component
       <Link href="/complex-dashboard" className='ml-4 text-blue-800 underline'>Default</Link>
       </Card>


    )
}

export default ArchivedNotification