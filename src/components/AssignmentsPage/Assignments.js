import { useState, useEffect} from 'react';
import AssignmentCard from './AssignmentCard'

function Assignments(){
  const[assigns, setAssigns] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/assignments")
      .then (r=>r.json())
      .then (data => setAssigns(data))
  },[])

    const assignmentList = assigns.map((assign) => <AssignmentCard assignment={assign} key={assign.id}/>)
  return (
    <div>
      {assignmentList}
    </div>
  )
}

export default Assignments;