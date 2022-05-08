
function EachSubByAssign({submission, pointsPossible}){

  return(
    <div className = "card">
      <h3>Student ID #{submission.student.id}: {submission.student.last_name}, {submission.student.first_name}</h3>
      <h4>Score: {submission.points_earned}/{pointsPossible}</h4>
      <h4>Notes: {submission.teacher_notes}</h4>
    </div>
  )
}

export default EachSubByAssign;