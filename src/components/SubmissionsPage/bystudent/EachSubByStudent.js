function EachSubByStudent({submission}){
  console.log(submission)
  return(
    <div className="card">
      <h3>{submission.assignment.description}</h3>
      <h4>{submission.points_earned}/{submission.assignment.points}</h4>
      <h4>{submission.teacher_notes}</h4>
    </div>
  )
}

export default EachSubByStudent;