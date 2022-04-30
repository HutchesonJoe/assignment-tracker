function AllSubCard({submission}){
 
  const thisAssignment = submission.student.assignments.find((a)=> a.id === submission.assignment_id)

  return (
    <div className = "submission-card">
      <h2>Submission ID: {submission.id}</h2>
      <h2>{thisAssignment.description}</h2>
      <h3>{submission.student.last_name}, {submission.student.first_name}</h3>
      <h3>Score: {submission.points_earned}/{thisAssignment.points}</h3>
      <h3>{submission.teacher_notes}</h3>
    </div>
  )
}

export default AllSubCard;