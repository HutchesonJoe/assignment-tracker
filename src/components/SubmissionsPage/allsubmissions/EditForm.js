import { useState } from 'react';

function EditForm({thisSub, submissions, setSubs}){
  const [newScore, setNewScore] = useState()
  const [newNotes, setNewNotes] = useState()
  
  
  let newScoreInt = (parseInt(newScore))
  let patchData = {
    points_earned: newScoreInt,
    teacher_notes: newNotes
  } 

  function handleSubmit(e){
    e.preventDefault()
    
    fetch(`http://localhost:9292/submissions/${thisSub.id}`,{ 
      method: "PATCH",
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(patchData)
    })
      .then (r=>r.json())
    .then (data=>{
      const thisIndex = submissions.findIndex(sub=>sub.id===data.id)
      const newSubs = submissions.filter(sub=>sub.id!==data.id)
      newSubs.splice(thisIndex, 0, data)
      setSubs(newSubs)

    })
    
  }

  return(
    <form className="edit-submission" onSubmit={handleSubmit}>
      <input type="text" className="edit-input" placeholder={thisSub.points_earned} onChange={(e)=>setNewScore(e.target.value)}></input>
      <textarea className="edit-input" rows="4" placeholder={thisSub.teacher_notes} onChange={(e)=>setNewNotes(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditForm;