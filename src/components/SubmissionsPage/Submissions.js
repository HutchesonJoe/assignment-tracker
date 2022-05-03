import { useState, useEffect} from 'react';
import AllSubmissions from './allsubmissions/AllSubmissions'
import { Route, Routes } from 'react-router-dom'
import ByStudent from './bystudent/ByStudent'
import ByAssignment from './byassignment/ByAssignment';
import RecordSubmission from './RecordSubmission'
import { NavLink } from 'react-router-dom'

function Submissions(){
  const [submissions, setSubmissions] = useState([])
  const [selection, setSelection] = useState("Review All/Edit Submissions")

  fetch("http://localhost:9292/submissions")
   .then(r=>r.json())
   .then(data=>setSubmissions(data))

  
  function handleSelect(e){
   if(e.target.value==="Review All/Edit Submissions"){
     setSelection("Review All/Edit Submissions")
   } else if(e.target.value==="View Submssions By Student"){
     setSelection("View Submssions By Student")
   } else if (e.target.value==="View Submissions By Assignment"){
     setSelection("View Submissions By Assignment")
   } else if (e.target.value==="Record Submission"){
    setSelection("Record Submission")
    }
  }
  // <AllSubmissions submissions={submissions} setSubmissions={setSubmissions}/>}
  //     <ByStudent/>
  //     <ByAssignment/>
  //     <RecordSubmission/>

  return(
    
      
  )
}
export default Submissions;