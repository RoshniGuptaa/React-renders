import React,{useState} from 'react'


const initState={
    fname:'Bruce',
    lname:'Wayne'
    
}
const ObjectUseState = () => {

    const[person ,setPerson]=useState(initState)

    const changeName=()=>{
        //this wil not lead to rerender as reference of object is same
        // person.fname='Roshni'
        // person.lname='Gupta'
        // setPerson(person)
        
        //This lead to re-render as object reference is changed
        const newPerson={...person}
        newPerson.fname='Roshni'
        newPerson.lname='Gupta'
        setPerson(newPerson)
    }
    console.log('ObjectUseState render')
  return (
    <div>
      <button onClick={changeName}>{person.fname}-{person.lname}</button>
    </div>
  )
}

export default ObjectUseState
