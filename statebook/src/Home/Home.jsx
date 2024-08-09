// import React, { useState } from 'react'
import React from 'react'
export default function Home({appCount,setCount}) {
    // const [count, setCount]= useState(0)
  return (
    <>
    <h2 className="text-center">COUNTER</h2>
    <h2 className='count'>Count = :{appCount}</h2>
    {/* <button className='bt' onClick={() => setCount(count+1)}>increases</button> */}
    {appCount > 0 && <button className='bt' onClick={() => setCount(appCount-1)}>decreases</button>}
    {/* <button className='bt' onClick={() => setCount(0)}>reset</button> */}








    </>
  )
}
