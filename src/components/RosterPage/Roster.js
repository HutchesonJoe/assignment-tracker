import React from 'react';
import { useState, useEffect} from 'react';
import StudentCard from './StudentCard'

function Roster(){
  
  const [students, setRoster] = useState([])
  const [classAverage, setClassAverage] = useState()
  
  useEffect(()=>{
    fetch("http://localhost:9292/students")
      .then (r=>r.json())
      .then (data => setRoster(data))
  },[])

  useEffect (()=>{
    fetch("http://localhost:9292/class_average")
    .then (r=>r.json())
    .then (data=>setClassAverage(data))
  })
  
  const currentRoster = students.map((student) => <StudentCard student={student} key={student.id}/>)
  
  return (
    <div>
      <p className="class-info">Class Size: {students.length}</p>
      <p className="class-info">Class Average: {classAverage}%</p>
      <div className="roster">{currentRoster}</div>
    </div>
  )
}

export default Roster