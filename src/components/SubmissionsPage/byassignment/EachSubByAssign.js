function EachSubByAssign({submission, points_possible}){
  console.log(submission)
  return(
    <div>
      <h3>{submission.student.last_name}, {submission.student.first_name}</h3>
      <h3>{submission.points_earned}/{points_possible}</h3>
      <h4>{submission.teacher_notes}</h4>
    </div>
  )

}

export default EachSubByAssign;