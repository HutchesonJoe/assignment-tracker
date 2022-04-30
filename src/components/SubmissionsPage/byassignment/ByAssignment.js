import { useState, useEffect} from 'react'
import AssignSubCard from './AssignSubCard'

function ByAssignment({submissions}){
  // const [subsByAssign, setSubsByAssign] = useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:9292/submissions_by_assignment")
  //     .then(r=>r.json())
  //     .then(data=>(setSubsByAssign(data)))
  // },[])

  const assignSubList = submissions.map((a)=><AssignSubCard assignment={a} key={a.id}/>)
 
  return(
    <div>{assignSubList}</div>
  )
}

export default ByAssignment;