import { useState } from 'react';

function EditForm({submission, submissions, setSubs}){
  const [newScore, setNewScore] = useState()
  const [newNotes, setNewNotes] = useState()
  
  
  let newScoreInt = (parseInt(newScore))
  let patchData = {
    points_earned: newScoreInt,
    teacher_notes: newNotes
  } 

  function handleSubmit(e){
    e.preventDefault()
    
    fetch(`http://localhost:9292/submissions/${submission.id}`,{ 
      method: "PATCH",
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(patchData)
    })
      .then (r=>r.json())
    .then (data=>console.log(data))
    
  }

  return(
    <form className="edit-submission" onSubmit={handleSubmit}>
      <input type="text" className="edit-input" placeholder={submission.points_earned} onChange={(e)=>setNewScore(e.target.value)}></input>
      <textarea className="edit-input" rows="4" placeholder={submission.teacher_notes} onChange={(e)=>setNewNotes(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditForm;