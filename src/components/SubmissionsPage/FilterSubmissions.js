function FilterSubmissions({submissions, getAllSubmissions, handleStudentSelect, handleAssignmentSelect}){

  const studentList = submissions.map((sub)=> <option key={sub.id} value={sub.id}>{sub.student.last_name}, {sub.student.first_name} - {sub.assignment.description}</option>) 

  const assignList = submissions.map((sub) => <option key={sub.id} value = {sub.id}>{sub.assignment.description} - {sub.student.last_name}, {sub.student.first_name}</option>)

  return (
    <div>
      <select className = "filter-select" onChange={handleStudentSelect}>
          <option>By Student</option>
          {studentList}
        </select>

        <select className = "filter-select" onChange={handleAssignmentSelect}>
          <option>By Assignment</option>
        {assignList}
        </select>

        <button onClick={()=>getAllSubmissions()}>Reset Filters</button>
    </div>
  )
}

export default FilterSubmissions