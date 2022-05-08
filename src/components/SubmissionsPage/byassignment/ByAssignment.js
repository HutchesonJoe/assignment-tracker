import { useState, useEffect} from 'react'
import EachSubByAssign from './EachSubByAssign'


function ByAssignment({submissions}){
  
  const [assigns, setAssigns] = useState([])
  const [subsByAssignment, setSubsByAssignment] = useState([])
  const [pointsPossible, setPointsPossible] = useState()
 
 

  useEffect(()=>{
    fetch("http://localhost:9292/submissions_by_assignment")
      .then(r=>r.json())
      .then(data=>(setAssigns(data)))
  },[])

  const assignList = assigns.map((assign)=><option key={assign.id}>{assign.description}</option>)
  
  function onSelect(e){
    if (e.target.value!=="Select Assignment"){
    const thisAssignment = assigns.find(assign=>assign.description===e.target.value)
    setPointsPossible(thisAssignment.points)
    const selectedSubs = submissions.filter(sub => sub.assignment.description === e.target.value)
    setSubsByAssignment(selectedSubs)
    }
  }

  const subList = subsByAssignment.map(sub=><EachSubByAssign submission={sub} pointsPossible = {pointsPossible} key={sub.id}/>)
 
  return(
    <div>
      <select onChange={onSelect}>
        <option>Select Assignment</option>
        {assignList}
      </select>
      <div>{subList}</div>

    </div>
    
  )
}

export default ByAssignment;