import React from 'react'

function getRandomInt(count) {
    return Math.floor(Math.random() * count);
}

const Productlayout = ({ children }) => {
    
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error('Failed to loading Product Id');
    }

    return (
        <div>
            <div className='text-base font-semibold'>
                Product layout
            </div>
            {children}
        </div>
    )
}

export default Productlayout