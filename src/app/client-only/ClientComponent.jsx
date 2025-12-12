// "use client"
import React from 'react'
import ServerComponent from './ServerComponent';

const ClientComponent = ({children}) => {
  return (

    <div>
        ClientComponent
        {children}
        {/* <ServerComponent /> */}
    </div>
  )
}

export default ClientComponent