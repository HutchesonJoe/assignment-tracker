import { isCompositeComponent } from "react-dom/test-utils";
import { useEffect, useState } from 'react';
import EditForm from './EditForm';

function AllSubCard({submission, submissions, setSubs}){
  const[thisStudSubs, setThisStudSubs] = useState([{}])
  const [formOn, setFormOn] = useState(false)

  const thisSub = thisStudSubs.find((sub)=> sub.id === submission.id)
  console.log(submission, submissions)
  function handleClick(){
    setFormOn(!formOn)
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
        <div>{thisSub ? <EditForm thisSub={thisSub} setSubs={setSubs} submissions={submissions} /> : ""}</div>
      </div>
     
    </div>
  )
}

export default AllSubCard;