function EachSubByStudent({submission}){
  console.log(submission)
  return(
    <div>
      <h3>{submission.assignment.description}</h3>
      <h4>{submission.points_earned}/{submission.assignment.points}</h4>
      <h5>{submission.teacher_notes}</h5>
    </div>
  )
}

export default EachSubByStudent;