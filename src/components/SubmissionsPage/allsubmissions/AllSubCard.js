function AllSubCard({submission}){
 console.log(submission)
  return (
    <div className = "submission-card">
      <h2>Submission ID: {submission.id}</h2>
      <h2>{submission.assignment.description}</h2>
      <h3>{submission.student_id}</h3>
      <h3>Score: {submission.points_earned}/{submission.assignment.points}</h3>
      <h3>{submission.teacher_notes}</h3>
    </div>
  )
}

export default AllSubCard;