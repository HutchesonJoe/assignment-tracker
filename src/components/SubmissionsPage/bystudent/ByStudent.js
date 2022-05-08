import { useState, useEffect } from 'react'
import EachSubByStudent from './EachSubByStudent'

function ByStudent(){
  
  const [students, setStudents] = useState([])
  const [submissions, setSubmissions] = useState([])
   
  useEffect(()=>{
    fetch("http://localhost:9292/submissions_by_student")
      .then(r=>r.json())
      .then(data=>(setStudents(data)))
  },[])

  const studentList = students.map((stud)=> <option key={stud.id} value={stud.id}>{stud.last_name}, {stud.first_name}</option>)  

  function onSelect(e){
    if (e.target.value!=="Select Student"){
      const thisStudent = students.find(stud=>(stud.id===parseInt(e.target.value)))
      setSubmissions(thisStudent.submissions)
    }
  }
 
  const submissionList = submissions.map(sub=><EachSubByStudent submission = {sub} key = {sub.id}/>)
  

  return(
    <div>
        <select onChange={onSelect}>
          <option>Select Student</option>
          {studentList}
        </select>
        <div>
        {submissionList}
        </div>
    </div>
  )
}

export default ByStudent;