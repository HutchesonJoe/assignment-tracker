import { useState } from 'react';
import EachSubByAssign from "../allsubmissions/AllSubCard"

function ByAssignmentButton({assignment}){
  const [thisAssignSubs, setThisAssignSubs] = useState([])
  const [thisSubListOn, setSubThisSubListOn] = useState(false)
  
  function handleClick(){
    console.log("click")
    setSubThisSubListOn(!thisSubListOn)
    fetch(`http://localhost:9292/submissions_by_assignment/${assignment.id}`)
    .then (r=>r.json())
    .then (data=>setThisAssignSubs(data))
  }
  const assignSubList = thisAssignSubs.map((sub)=><EachSubByAssign submission={sub} key={sub.id}/>)

  return(
    <div>
      <button onClick={handleClick}>{assignment.description}</button>
      <div>{assignSubList}</div>
    </div>
  )
}

export default ByAssignmentButton;