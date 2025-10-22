import React from 'react'
import "../../globals.css"
import { Card } from '@/components/Card'

const Loading = async () => {


    return (
        <Card >
            <div className='flex flex-col jutify-center items-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900'> </div>
                <p> Loading Notification...</p>
            </div>

        </Card>
    )
}

export default Loading