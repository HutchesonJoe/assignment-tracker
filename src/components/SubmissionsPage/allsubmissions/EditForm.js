import { useState } from 'react';

function EditForm({submission, submissions, setSubmissions, setFormOn, formOn}){
  const [newScore, setNewScore] = useState(submission.points_earned)
  const [newNotes, setNewNotes] = useState(submission.teacher_notes)
  console.log(submission)
  let newScoreInt = (parseInt(newScore))
  let patchData = {
    points_earned: newScoreInt,
    teacher_notes: newNotes
  } 
  
  function handleSubmit(e){
    e.preventDefault()
    setFormOn(!formOn)
    if (newScore===null){
      setNewScore(submission.points_earned)
    } 
    if (newNotes===null){
      setNewNotes(submission.teacher_notes)
    }

  const subIndex = submissions.findIndex((sub)=>sub.id===submission.id)
  const filteredSubs = submissions.filter((sub)=>sub.id!==submission.id)
  
    fetch(`http://localhost:9292/submissions/${submission.id}`,{ 
      method: "PATCH",
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(patchData)
    })
      .then (r=>r.json())
      .then (data=> {
        filteredSubs.splice(subIndex, 0, data)
        setSubmissions(filteredSubs)
      })
    
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