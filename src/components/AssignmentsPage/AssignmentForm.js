import { useState } from 'react';

function AssignmentForm(){
  const [desc, setDesc] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [points, setPoints] = useState("")

  const assignmentData = { description: desc,
    due_date: dueDate,
    points: points
  }
  console.log(assignmentData)
  
  function handleSubmit(e){
    console.log(desc, dueDate, points)
    e.preventDefault()
    fetch("http://localhost:9292/assignments", {
      method: "POST",
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(assignmentData)
      })
        .then (r=>r.json())
        .then (data=>console.log(data))
  }

  return(
    <div>
      <form className="create-assignment" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter assignment description" onChange={(e)=>setDesc(e.target.value)}></input>
        <input type="text" placeholder="Enter due date" onChange={(e)=>setDueDate(e.target.value)} ></input>
        <input type="text" placeholder="Enter points possible" onChange={(e)=>setPoints(e.target.value)} ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AssignmentForm;