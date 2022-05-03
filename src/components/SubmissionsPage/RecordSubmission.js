import { useEffect, useState } from 'react';


function RecordSubmission({students}){
  
  const [assignsForOptions, setAssignsForOptions] = useState([])
  const [description, setDesc] = useState("")
  const [points, setPoints] = useState()
  const [notes, setNotes] = useState("")
  const [studId, setStudId] = useState(students[0].id)
  const [assId, setAssId] = useState()
  // const [studSelect, setStudSelect] = useState()
  // const [assignSelect, setAssignSelect] = useState()
  
  useEffect(()=>{
    fetch("http://localhost:9292/assignments")
      .then(r=>r.json())
      .then(data=>setAssignsForOptions(data))
  },[])
  //How do I get these assignments without doing another fetch? Do I do this in another module? 

  const studentByIdList = []
  const studentOptions = students.map(stud=>{
    // studentByIdList.push({[stud.id]: stud.last_name})
    return(
      <option key={stud.id} value={stud.id}>{stud.last_name}, {stud.first_name} </option>
    )
  })

  const assignByIdList = []
  const assignmentOptions = assignsForOptions.map(assign=>{
    // assignByIdList.push({[assign.id]: assign.description})
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
    .then (data=>console.log(data))
  }

  function handleStudentSelect(e){
    const student = students.find(stud=>parseInt(e.target.value)===stud.id)
    // setStudId(student.id)
  }

  function handleAssignSelect(e){
    const assignment = assignsForOptions.find(assign=>parseInt(e.target.value)===assign.id)
    // setAssId(assignment.id)
  }

  return(
    <div>
      <form className="record-submission" onSubmit={handleSubmit}>
       
        <select>{studentOptions}</select>
        {/* <select onChange={handleAssignSelect}>{assignmentOptions}</select> */}
        <input type="text" placeholder="Enter points earned" className="form-input" onChange={(e)=>setPoints(e.target.value)}></input>
        <textarea type="text" placeholder="Enter notes" rows={5} className="form-input" onChange={(e)=>setNotes(e.target.value)}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RecordSubmission