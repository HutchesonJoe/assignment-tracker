function AllSubCard({submission}){
  
  return (
    <div className = "card">
      <h3>Submission ID: {submission.id}</h3>
      <h4>{submission.assignment.description}</h4>
      <h4>Student ID:{submission.student_id}</h4>
      <h4>Score: {submission.points_earned}/{submission.assignment.points}</h4>
      <h4>{submission.teacher_notes}</h4>
    </div>
  )
}

export default AllSubCard;