function StudentCard({student}){
  return(
    <div className="student-card">
      <h2>ID#{student.id}: {student.last_name}, {student.first_name}</h2>
      <h3>{student.grade_level}</h3>
      <h4>{student.gpa}</h4>
      <h4>{student.email}</h4>
    </div>
  )
}

export default StudentCard