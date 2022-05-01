import { isCompositeComponent } from "react-dom/test-utils";
import { useState } from 'react';
import EditForm from './EditForm';

function AllSubCard({submission}){
  const[thisStudSubs, setThisStudSubs] = useState([{}])
  const thisSub = thisStudSubs.find((sub)=> sub.id === submission.id)

  function handleClick(){
    fetch(`http://localhost:9292/submissions_by_student/${submission.student_id}`)
    .then(r=> r.json())
    .then(data=>setThisStudSubs(data))
  }

  return (
    <div className = "card">
      <h3>{submission.assignment.description}: #{submission.id}</h3>
      <h4>Student ID:{submission.student_id}</h4>
      <h4>Score: {submission.points_earned}/{submission.assignment.points}</h4>
      <h4>{submission.teacher_notes}</h4>
      <div className="edit-delete-box">
        <button className="edit-option" onClick={handleClick}>Edit</button>
        <button className="delete-option">Delete</button>
        {thisSub ? <EditForm thisSub={thisSub}/> : ""}
      </div>
     
    </div>
  )
}

export default AllSubCard;