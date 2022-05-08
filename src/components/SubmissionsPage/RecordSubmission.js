import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


function RecordSubmission({submissions, setSubmissions, setSelection}){
  
  const [assignments, setAssignments] = useState([])
  const [students, setStudents] = useState([])
  const [points, setPoints] = useState(0)
  const [notes, setNotes] = useState("")
  const [studId, setStudId] = useState()
  const [assId, setAssId] = useState()

  const navigate = useNavigate()
 

  useEffect(()=>{
    fetch("http://localhost:9292/assignments")
      .then(r=>r.json())
      .then(data=>{
        setAssignments(data)
        setAssId(data[0].id)
      })
  },[])

  useEffect(()=>{
    fetch("http://localhost:9292/students")
      .then(r=>r.json())
      .then(data=>{
        setStudents(data)
        setStudId(data[0].id)
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

  function handleStudentSelect(e){
    setStudId(e.target.value)
  }

  function handleAssignSelect(e){
    setAssId(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    navigate(0)
    //setSelection("Review All/Edit Submissions")
    
    if (points===null){
      setPoints(0)
    } 
    if (notes===null){
      setNotes("(No notes.)")
    }
    
    const submission = {
      points_earned: points,
      teacher_notes: notes,
      assignment_id: assId,
      student_id: studId
    }
    
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