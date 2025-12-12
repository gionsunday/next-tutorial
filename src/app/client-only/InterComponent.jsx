import React from 'react'
import ClientComponent from './ClientComponent';
import ServerComponent from './ServerComponent';

const InterComponent = () => {

    return (
        <div>InterComponent
            <ClientComponent>
                <ServerComponent />
            </ClientComponent>
        </div>
    )
}

export default InterComponent