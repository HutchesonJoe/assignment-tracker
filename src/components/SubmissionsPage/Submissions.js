import { useState, useEffect} from 'react';
import AllSubmissions from './allsubmissions/AllSubmissions'
import ByStudent from './bystudent/ByStudent'
import ByAssignment from './byassignment/ByAssignment';
import RecordSubmission from './RecordSubmission'

function Submissions(){
  const [submissions, setSubmissions] = useState([])
  const [selection, setSelection] = useState("Review All/Edit Submissions")

  useEffect(()=>{
    fetch("http://localhost:9292/submissions")
    .then(r=>r.json())
    .then(data=>setSubmissions(data))
  },[])
  
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

  let renderChoice 
  if (selection==="Review All/Edit Submissions"){
      renderChoice = <AllSubmissions submissions={submissions} setSubmissions={setSubmissions}/>
  } else if (selection==="View Submssions By Student"){
      renderChoice = <ByStudent/>
    } else if (selection==="View Submissions By Assignment"){
    renderChoice = <ByAssignment/>
    } else if (selection==="Record Submission"){
    renderChoice = <RecordSubmission submissions={submissions} setSubmissions={setSubmissions} setSelection={setSelection}/>
    }
  
  return(
    <>
      <div className="filter-submissions">Select option:   
        <select onChange={handleSelect} className="sub-option-form">
        <option>Review All/Edit Submissions</option>
        <option>View Submssions By Student</option>
        <option>View Submissions By Assignment</option>
        <option>Record Submission</option>
      </select></div>
      
      <div className="submission-display-box">
        {renderChoice}
      </div>
    </>
      
  )
}
export default Submissions;