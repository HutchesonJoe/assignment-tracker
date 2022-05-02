import React from 'react';
import { useState, useEffect} from 'react';
import StudentCard from './StudentCard'

function Roster({students}){
  
  const currentRoster = students.map((student) => <StudentCard student={student} key={student.id}/>)

  return (
    <div className="roster">{currentRoster}</div>
  )
}

export default Roster