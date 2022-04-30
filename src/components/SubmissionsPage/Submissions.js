import { useState, useEffect} from 'react';
import AllSubmissions from './allsubmissions/AllSubmissions'
import ByStudent from './bystudent/ByStudent'
import ByAssignment from './byassignment/ByAssignment';

function Submissions(){

 const [submissions, setSubmissions] = useState([])
 const [selection, setSelection] = useState(<AllSubmissions/>)

 useEffect(()=>{
  fetch("http://localhost:9292/submissions")
  .then (r => r.json())
  .then (data=>setSubmissions(data))
 },[])

  
  function handleSelect(e){
   if(e.target.value==="All Submissions"){
     setSelection(<AllSubmissions submissions={submissions}/>)
   } else if(e.target.value==="By Student"){
     setSelection(<ByStudent/>)
   } else if (e.target.value==="By Assignment"){
     setSelection(<ByAssignment submissions={submissions}/>)
   }
  }


  return(
    <>
      <p>Filter Submissions:</p>
      <select onChange={handleSelect}>
        <option>All Submissions</option>
        <option>By Student</option>
        <option>By Assignment</option>
      </select>
      <div className="submission-display-box">
        {selection}
        </div>
    </>
    
    // <div>
    //   <p>View submissions:</p>
    //   <form>
    //   <select type="select" onChange={handleStudentSelect} value="assignment">
       
    //   </select>
    //   </form>
    //   <button value="student">By Student</button>
    //   
    // </div>
  )
}
export default Submissions;