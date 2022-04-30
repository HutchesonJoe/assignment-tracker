import SubmissionCard from "../allsubmissions/AllSubCard"

function ByStudentButton({student, handleClick}){
console.log(student)
  
  return(
    <button onClick={handleClick(student)}>{student.last_name}, {student.first_name}</button>
  )
}

export default ByStudentButton;