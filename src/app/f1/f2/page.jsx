import Link from 'next/link'
import React from 'react'


const F2 = () => {
  return (
    <>
    
    <div>F2 Page</div>
    <Link href={"/f4"}>F4</Link>
    
    <Link href={"/f4/innerf4"}>Inner F4</Link>

    </>
  )
} 


export default F2