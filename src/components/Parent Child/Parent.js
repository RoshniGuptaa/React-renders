import React, { useState } from 'react'
import Child from './Child'
// no rendering since value is same after initial rendering
//if same value afrer re-rendering ,then it render one more tome and then bails out from further renders
const Parent = () => {
    const [count,setCount]=useState(0)
    console.log("UseState render")
  return (
    <div>
      <button onClick={()=>setCount(c=>c)}>Count-{count}</button>
      <Child></Child>
    </div>
  )
}

export default Parent
