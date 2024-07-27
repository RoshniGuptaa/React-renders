import React, { useState } from 'react'
// no rendering since value is same after initial rendering
//if same value afrer re-rendering ,then it render one more tome and then bails out from further renders
const UseState = () => {
    const [count,setCount]=useState(0)
    console.log("UseState render")
  return (
    <div>
      <button onClick={()=>setCount(c=>c)}>Count-{count}</button>
    </div>
  )
}

export default UseState
