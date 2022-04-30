function StudentCard({student}){
  return(
    <div className="card">
      <h3>ID#{student.id}: {student.last_name}, {student.first_name}</h3>
      <h4>{student.grade_level}, GPA: {student.gpa}</h4>
      <h4></h4>
      <h4>{student.email}</h4>
    </div>
  )
}

export default StudentCard