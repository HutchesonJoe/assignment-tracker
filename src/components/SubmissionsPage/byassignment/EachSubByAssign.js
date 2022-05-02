function EachSubByAssign({submission, points_possible}){
  console.log(submission)

  function handleDelete(){

  }

  return(
    <div className="card">
      <h3>{submission.student.last_name}, {submission.student.first_name}</h3>
      <h4>{submission.points_earned}/{points_possible}</h4>
      <h4>{submission.teacher_notes}</h4>
      <button>Delete Assignment</button>
    </div>
  )

}

export default EachSubByAssign;