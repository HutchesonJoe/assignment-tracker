function AssignmentCard({assignment}){
  return(
    <div>
      <h2>ID {assignment.id}: {assignment.description}</h2>
      <h3>DUE {assignment.due_date}</h3>
      <h3>{assignment.points} possible</h3>
    </div>
  )
}

export default AssignmentCard