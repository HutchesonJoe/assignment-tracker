import { useState, useEffect } from 'react'
import EachSubmission from './EachSubmission'

function AllSubmissions({submissions, setSubmissions}){
  // const[subs, setSubs] = useState([])
  // // const[students, setStudents] = useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:9292/submissions")
  //   .then (r => r.json())
  //   .then (data=>setSubs(data))
  // },[])

  // useEffect(()=>{
  //   fetch("http://localhost:9292/students")
  //   .then (r => r.json())
  //   .then (data => setStudents(data))
  // },[])
      
     
  const currentSubmissionDisplay = submissions.map((sub) => <EachSubmission submission={sub} submissions={submissions} key={sub.id} setSubmissions={setSubmissions}/>)

  return(
    <div>{currentSubmissionDisplay}</div>
  )
}

export default AllSubmissions;