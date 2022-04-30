import { useState, useEffect } from 'react'
import AllSubCard from './AllSubCard'

function AllSubmissions(){
  const[subs, setSubs] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:9292/submissions")
    .then (r => r.json())
    .then (data=>setSubs(data))
  },[])

 
    const currentSubmissionDisplay = subs.map((sub) => <AllSubCard submission={sub} key={sub.id}/>)

    return(
      <div>{currentSubmissionDisplay}</div>
    )
  
}

export default AllSubmissions;