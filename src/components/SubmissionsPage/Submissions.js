import { useState, useEffect} from 'react';
import AllSubmissions from './allsubmissions/AllSubmissions'
import RecordSubmission from './RecordSubmission'


function Submissions(){
  const [submissions, setSubmissions] = useState([])
  const [selection, setSelection] = useState("Review/Edit Submissions")
  const [sortSelection, setSortSelection] = useState("All Submissions")
  
  function getAllSubmissions(){
    fetch("http://localhost:9292/submissions")
    .then(r=>r.json())
    .then(data=>setSubmissions(data))
  }

  useEffect(()=>{
    getAllSubmissions()
  },[])
  
  function handleSelect(e){
   if(e.target.value==="Review/Edit Submissions"){
     setSelection("Review/Edit Submissions")
   }  else if (e.target.value==="Record Submission"){
    setSelection("Record Submission")
    }
  } 

  let renderChoice 
  if (selection==="Review/Edit Submissions"){
      renderChoice = <AllSubmissions submissions={submissions} setSubmissions={setSubmissions} getAllSubmissions={getAllSubmissions}/>
  } 
    else if (selection==="Record Submission"){
    renderChoice = 
    <RecordSubmission submissions={submissions} setSubmissions={setSubmissions} setSelection={setSelection}/>
  }
  
  return(
    <>
      <div className="filter-submissions">Select option:   
        <select onChange={handleSelect} className="sub-option-form">
        <option>Review/Edit Submissions</option>
        <option>Record Submission</option>
      </select></div>
      
      <div>
        {renderChoice}
      </div>
    </>
      
  )
}
export default Submissions;