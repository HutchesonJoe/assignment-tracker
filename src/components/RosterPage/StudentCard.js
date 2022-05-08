function StudentCard({student}){

  let letter_grade
  let passing = ""
  if (student.current_grade >= 97){
    letter_grade = "A+"
  } else if (student.current_grade >= 93){
    letter_grade ="A"
  } else if (student.current_grade >= 90){
      letter_grade ="A-"
  } else if (student.current_grade >= 87){
    letter_grade ="B+"
  } else if (student.current_grade >= 83){
    letter_grade ="B"
  } else if (student.current_grade >= 80){
    letter_grade ="B-"
  } else if (student.current_grade >= 77){
    letter_grade ="C+"
  } else if (student.current_grade >= 73){
    letter_grade ="C"
  } else if (student.current_grade >= 70){
    letter_grade ="C-"
  } else if (student.current_grade >= 67){
    letter_grade ="D+"
  } else if (student.current_grade >= 63){
    letter_grade ="D"
  } else if (student.current_grade >= 60){
    letter_grade ="D-"
  } else {
    letter_grade ="F"
    passing = "failing"
  }

  return(
    <div className="card">
      <h3>ID# {student.id}: {student.last_name}, {student.first_name}</h3>
      <h4>{student.grade_level}, GPA: {student.gpa}</h4>
      <h4 className={passing}>Current Grade: {student.current_grade ? student.current_grade : "No submissions."} ({student.current_grade ? letter_grade : "N/A"})</h4>
      <h4>Contact email: {student.email}</h4>
    </div>
  )
}

export default StudentCard