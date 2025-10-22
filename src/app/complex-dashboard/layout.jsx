import React from 'react'

const ComplexDashboardLayout = ({ children, users, revenue, notification }) => {
    return (
        <div>
            <div >{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notification}</div>
            </div>
        </div>
    )
}

export default ComplexDashboardLayout