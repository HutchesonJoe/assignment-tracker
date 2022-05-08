function EachSubByStudent({submission}){
  
  return(
    <div className="card">
      <h3>{submission.assignment.description}</h3>
      <h4>Student ID#: {submission.student_id}</h4>
      <h4>Score: {submission.points_earned}/{submission.assignment.points}</h4>
      <h4>Notes: {submission.teacher_notes}</h4>
    </div>
  )
}

export default EachSubByStudent;