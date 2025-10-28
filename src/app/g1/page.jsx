import Link from 'next/link'
import React from 'react'

const G1 = () => {
  return (
    <>
    <div>G1 page</div>
    <Link href={"/g1/g2"}>g2</Link>
    </>
  )
}

export default G1