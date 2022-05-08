import { isCompositeComponent } from "react-dom/test-utils";
import { useEffect, useState } from 'react';
import EditForm from './EditForm';

function EachSubmission({submission, submissions, setSubmissions}){
  
  const [formOn, setFormOn] = useState(false)
 
  function handleClick(){
    setFormOn(!formOn)
  }

  function handleDelete(){
    const deleteConfirm = window.confirm("Are you sure you want to delete this submission?")
    if (deleteConfirm){
      fetch(`http://localhost:9292/submissions/${submission.id}`,{
      method: "DELETE",
      headers: { 
        'Content-Type' : 'application/json'
      }
    })
    .then (r=>r.json())
    .then ((data)=>{
      const newSubs = submissions.filter(sub => data.id !== sub.id)
      setSubmissions(newSubs)
    })
    }
  }
 
  return (
    <div className = "card">
      <h3>{submission.assignment ? submission.assignment.description : ""}: #{submission.id}</h3>
      <h4>{submission.student.last_name}, {submission.student.first_name}</h4>
      <h4>Student ID: {submission.student_id}</h4>
      <h4>Score: {submission.points_earned}/{submission.assignment ? submission.assignment.points : ""}</h4>
      <h4>Notes: {submission.teacher_notes}</h4>
      <div className="edit-delete-box">
        <button className="edit-option" onClick={handleClick}>Edit</button>
        <button className="delete-option" onClick={handleDelete}>Delete</button>
        <div>{formOn ? <EditForm setFormOn={setFormOn} formOn={formOn} submission={submission} submissions={submissions} setSubmissions={setSubmissions}/> : ""}</div>
      </div>
     
    </div>
  )
}

export default EachSubmission;