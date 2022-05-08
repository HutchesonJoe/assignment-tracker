import { useState, useEffect} from 'react';
import AllSubmissions from './allsubmissions/AllSubmissions'
import ByStudent from './bystudent/ByStudent'
import ByAssignment from './byassignment/ByAssignment';
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
  if (selection==="Review/Edit Submissions"){
      renderChoice = <AllSubmissions submissions={submissions} setSubmissions={setSubmissions}/>
  } 
    else if (selection==="Record Submission"){
    renderChoice = <RecordSubmission submissions={submissions} setSubmissions={setSubmissions} setSelection={setSelection}/>
  }
  
  const unique = (value, index, self) => {  
    return self.indexOf(value) === index
  }
 
  const studentList = submissions.map((sub)=> <option key={sub.id} value={sub.student_id}>{sub.student.last_name}, {sub.student.first_name} - {sub.assignment.description}</option>) 

  const assignList = submissions.map((sub) => <option key={sub.id}>{sub.assignment.description} - {sub.student.last_name}, {sub.student.first_name}</option>)

  function handleStudentSelect(e){
    if (e.target.value==="By Student"){
      getAllSubmissions()
    } else {
      const thisStudentSubs = submissions.filter(sub=>sub.student_id===parseInt(e.target.value))
    setSubmissions(thisStudentSubs)
    }
  }

  function handleAssignmentSelect(e){
    if (e.target.value==="By Assignment"){
      getAllSubmissions()
    } else {
      const thisAssignSubs = submissions.filter(sub=>sub.assignment.description===e.target.value)
      setSubmissions(thisAssignSubs)
    }
  }
  
  return(
    <>
      <div className="filter-submissions">Select option:   
        <select onChange={handleSelect} className="sub-option-form">
        <option>Review/Edit Submissions</option>
        <option>Record Submission</option>
      </select></div>
      
      <div>
        <select className = "filter-select" onChange={handleStudentSelect}>
          <option>By Student</option>
          {studentList}
        </select>

        <select className = "filter-select" onChange={handleAssignmentSelect}>
          <option>By Assignment</option>
        {assignList}
        </select>

        <button onClick={()=>getAllSubmissions()}>Reset Filters</button>

        {renderChoice}
      </div>
    </>
      
  )
}
export default Submissions;