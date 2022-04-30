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

  function handleClick(stud){
    console.log("click")
    const thisStudentSubs = stud.submissions.map((sub)=> <EachSubByStudent submission={sub}/>)
    setStudentSubs(thisStudentSubs)
  }
  
  const studentSubButtons = subsByStudent.map((stud)=> <ByStudentButton student={stud} key={stud.id} handleClick={handleClick}/>)

  // return(
  //   <div>
  //     <div>{studentSubButtons}</div>
  //     <div>{studentSubs}</div>
  //   </div>
  // )
}

export default ByStudent;