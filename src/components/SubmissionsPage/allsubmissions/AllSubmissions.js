
import EachSubmission from './EachSubmission'
import FilterSubmissions from '../FilterSubmissions'

function AllSubmissions({submissions, setSubmissions, getAllSubmissions}){
  
  const currentSubmissionDisplay = submissions.map((sub) => <EachSubmission submissions={submissions} submission={sub} key={sub.id} setSubmissions={setSubmissions}/>)
  
  function handleStudentSelect(e){
    if (e.target.value==="By Student"){
      getAllSubmissions()
    } else {
      const thisStudentSubmission = submissions.find(sub=>sub.id===parseInt(e.target.value))
    setSubmissions([thisStudentSubmission])
    }
  }

  function handleAssignmentSelect(e){
    if (e.target.value==="By Assignment"){
      getAllSubmissions()
    } else {
      const thisAssignSubmission = submissions.find(sub=>sub.id===parseInt(e.target.value))
      setSubmissions([thisAssignSubmission])
    }
  }
      
  return(
    <div>
      <FilterSubmissions submissions={submissions} getAllSubmissions={getAllSubmissions} handleStudentSelect={handleStudentSelect} handleAssignmentSelect={handleAssignmentSelect}/>
      {currentSubmissionDisplay}
      </div>
  )
}

export default AllSubmissions;