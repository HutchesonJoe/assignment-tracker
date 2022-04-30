import { useState, useEffect} from 'react';
import AssignmentCard from './AssignmentCard'
import AssignmentForm from './AssignmentForm';

function Assignments(){
  const[assigns, setAssigns] = useState([])
  const[assignFormOn, setAssignFormOn] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:9292/assignments")
      .then (r=>r.json())
      .then (data => setAssigns(data))
  },[])

  function handleClick(){
    console.log(assignFormOn)
    setAssignFormOn(!assignFormOn)
  }

    const assignmentList = assigns.map((assign) => <AssignmentCard assignment={assign} key={assign.id}/>)
  return (
    <div>
      <button onClick={handleClick}>Create Assignment:</button>
      <div>{assignFormOn ? <AssignmentForm/> : ""}</div>
      <div>{assignmentList}</div>
      
      
    </div>
  )
}

export default Assignments;