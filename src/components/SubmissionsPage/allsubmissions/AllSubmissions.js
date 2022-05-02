import { useState, useEffect } from 'react'
import AllSubCard from './AllSubCard'

function AllSubmissions(){
  const[subs, setSubs] = useState([])
  const[students, setStudents] = useState([])

  //How do I fix this? Two fetches?
  
  useEffect(()=>{
    fetch("http://localhost:9292/submissions")
    .then (r => r.json())
    .then (data=>setSubs(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:9292/students")
    .then (r => r.json())
    .then (data => setStudents(data))
  },[])
      
      // const theseSubs = []
      // const theseSubsArrays = students.map(stud => stud.submissions)
      // const theseSubsUnflat = theseSubsArrays.map(subs=> {
      //   subs.map(obj=>theseSubs.push(obj))
      // })
      // setSubs(theseSubs)
     
  const currentSubmissionDisplay = subs.map((sub) => <AllSubCard submission={sub}  students={students} submissions={subs} setSubs={setSubs} key={sub.id}/>)

  return(
    <div>{currentSubmissionDisplay}</div>
  )
}

export default AllSubmissions;