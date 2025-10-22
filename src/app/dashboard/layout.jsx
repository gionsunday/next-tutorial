import React from 'react'

const DashboardLayout = ({ children, notifications, revenue, users }) => {
    return (
        <div>
            <div>{children}</div>
            <div className='flex justify-start p-4 m-4 border-t'>
                <div className='flex flex-col '>
                    <div>{revenue}</div>
                    <div>{users}</div>
                </div>
                <div className='flex flex-1 '>{notifications}</div>
            </div>

        </div>
    )
}

export default DashboardLayout