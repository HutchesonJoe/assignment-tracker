function AssignmentCard({assignment}){
  return(
    <div className="card">
      
      <h3>ID {assignment.id}: {assignment.description}</h3>
      <h4>DUE {assignment.due_date}</h4>
      <h4>{assignment.points} points possible</h4>
    </div>
  )
}

export default AssignmentCard