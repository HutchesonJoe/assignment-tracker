import React from 'react';
import { useState, useEffect} from 'react';
import StudentCard from './StudentCard'

function Roster(){
  
  const [students, setRoster] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/students")
      .then (r=>r.json())
      .then (data => setRoster(data))
  },[])
  
  const currentRoster = students.map((student) => <StudentCard student={student} key={student.id}/>)

  return (
    <div className="roster">{currentRoster}</div>
  )
}

export default Roster