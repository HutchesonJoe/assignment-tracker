import { useEffect, useState } from 'react';
import EachSubByAssign from "./EachSubByAssign"

function ByAssignmentButton({assignment}){
  
  const [thisAssignSubs, setThisAssignSubs] = useState([])
  const [thisSubListOn, setSubThisSubListOn] = useState(false)
  
  function handleClick(){
    console.log(thisAssignSubs)
    setSubThisSubListOn(!thisSubListOn)
    fetch(`http://localhost:9292/submissions_by_assignment/${assignment.id}`)
    .then (r=>r.json())
    .then (data=>setThisAssignSubs(data))
  }
  
  let assignSubList

    if (thisAssignSubs===[]){
      assignSubList = "No submissions to display."
    } else {
      assignSubList = thisAssignSubs.map((sub)=><EachSubByAssign submission={sub} key={sub.id} points_possible={assignment.points}/>)
    }
  
  return(
    <div>
      <button onClick={handleClick}>{assignment.description}</button>
      <div>
        {thisSubListOn ? assignSubList : ""}
      </div>
    </div>
  )
}

export default ByAssignmentButton;