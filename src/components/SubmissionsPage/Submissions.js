import { useState, useEffect} from 'react';
import AllSubmissions from './allsubmissions/AllSubmissions'
import ByStudent from './bystudent/ByStudent'
import ByAssignment from './byassignment/ByAssignment';

function Submissions(){

  const [selection, setSelection] = useState(<AllSubmissions/>)
  function handleSelect(e){
   if(e.target.value==="All Submissions"){
     setSelection(<AllSubmissions/>)
   } else if(e.target.value==="By Student"){
     setSelection(<ByStudent/>)
   } else if (e.target.value==="By Assignment"){
     setSelection(<ByAssignment/>)
   }
  }


  return(
    <>
      <div className="filter-submissions">Select option:   
        <select onChange={handleSelect} className="sub-option-form">
        {/* <option>Record Submission</option> */}
        <option>Review All/Edit Submissions</option>
        <option>View Submssions By Student</option>
        <option>View Submissions By Assignment</option>
      </select></div>
      
      <div className="submission-display-box">
        {selection}
        </div>
    </>
  
  )
}
export default Submissions;