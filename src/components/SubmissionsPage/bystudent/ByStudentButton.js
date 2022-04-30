import EachSubByStudent from "./EachSubByStudent";
import { useState } from 'react';

function ByStudentButton({student}){
  const [thisStudentSubs, setThisStudentSubs] = useState([])
  const [subListOn, setSubListOn] = useState(false)
 
  function handleClick(){
    setSubListOn(!subListOn)
    fetch(`http://localhost:9292/submissions_by_student/${student.id}`)
    .then (r=>r.json())
    .then (data=>setThisStudentSubs(data))
  }

  const subList = thisStudentSubs.map((sub)=><EachSubByStudent submission={sub} key={sub.id}/>)

  return(
    <div>
      <button onClick={handleClick}>{student.last_name}, {student.first_name}</button>
      <div>{subListOn ? subList : ""}</div>
    </div>
    
  )
}

export default ByStudentButton;