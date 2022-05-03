import { useState, useEffect} from 'react'
import ByAssignmentButton from './ByAssignmentButton'

function ByAssignment(){
  const [subsByAssign, setSubsByAssign] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/submissions_by_assignment")
      .then(r=>r.json())
      .then(data=>(setSubsByAssign(data)))
  },[])

  const assignSubList = subsByAssign.map((a)=><ByAssignmentButton assignment={a} key={a.id}/>)
 
  return(
    <div>{assignSubList}</div>
  )
}

export default ByAssignment;