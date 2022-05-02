function AssignmentCard({assignment, assigns, setAssigns}){

  function handleDelete(){
    alert("Are you sure you want to delete this assignment?")
    fetch(`http://localhost:9292/assignments/${assignment.id}`,{
      method: "DELETE",
      headers: { 
        'Content-Type' : 'application/json'
      }
    })
    .then (r=>r.json())
    .then ((data)=>{
      const newAssigns = assigns.filter(assign => data.id !== assign.id)
      setAssigns(newAssigns)
    })

  }
  return(
    <div className="card">
      <h3>ID {assignment.id}: {assignment.description}</h3>
      <h4>DUE {assignment.due_date}</h4>
      <h4>{assignment.points} points possible</h4>
      <button onClick={handleDelete}>Delete Assignment</button>
    </div>
  )
}

export default AssignmentCard