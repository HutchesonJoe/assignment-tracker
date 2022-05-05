import { useEffect, useState } from 'react';


function RecordSubmission({submissions, setSubmissions}){
  
  const [assignments, setAssignments] = useState([])
  const [students, setStudents] = useState([])
  const [description, setDesc] = useState("")
  const [points, setPoints] = useState()
  const [notes, setNotes] = useState("")
  const [studId, setStudId] = useState()
  const [assId, setAssId] = useState()
  
  useEffect(()=>{
    fetch("http://localhost:9292/assignments")
      .then(r=>r.json())
      .then(data=>{
        setAssignments(data)
        setStudId(data[0].id)
      })
  },[])

  useEffect(()=>{
    fetch("http://localhost:9292/students")
      .then(r=>r.json())
      .then(data=>{
        setStudents(data)
        setAssId(data[0].id)
      })
  },[])

  const studentOptions = students.map(stud=>{
    return(
      <option key={stud.id} value={stud.id}>{stud.last_name}, {stud.first_name} </option>
    )
  })

  const assignmentOptions = assignments.map(assign=>{
    return(
      <option key={assign.id} value={assign.id}>{assign.description}</option>
    )
  })

  const submission = {
    points_earned: points,
    teacher_notes: notes,
    assignment_id: assId,
    student_id: studId
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/submissions", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(submission)
    })
    .then (r=>r.json())
    .then (data=>setSubmissions([...submissions, data]))
  }

  function handleStudentSelect(e){
    setStudId(e.target.value)
  }

  function handleAssignSelect(e){
    setAssId(e.target.value)
  }

  return(
    <div>
      <form className="record-submission" onSubmit={handleSubmit}>
       
        <select onChange={handleStudentSelect}>{studentOptions}</select>
        <select onChange={handleAssignSelect}>{assignmentOptions}</select>
        <input type="text" placeholder="Enter points earned" className="form-input" onChange={(e)=>setPoints(e.target.value)}></input>
        <textarea type="text" placeholder="Enter notes" rows={5} className="form-input" onChange={(e)=>setNotes(e.target.value)}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RecordSubmission