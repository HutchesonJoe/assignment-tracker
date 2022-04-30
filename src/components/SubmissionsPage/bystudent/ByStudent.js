import { useState, useEffect } from 'react'
import ByStudentButton from './ByStudentButton'
import EachSubByStudent from './EachSubByStudent'
function ByStudent(){
  
  const [subsByStudent, setSubsByStudent] = useState([])
  const [studentSubs, setStudentSubs] = useState({})

  useEffect(()=>{
    fetch("http://localhost:9292/submissions_by_student")
      .then(r=>r.json())
      .then(data=>(setSubsByStudent(data)))
  },[])

  const studentSubButtons = subsByStudent.map((stud)=> <ByStudentButton student={stud} key={stud.id}/>)  

  return(
    <div>
      {studentSubButtons}
    </div>
  )
}

export default ByStudent;