import { useState, useEffect } from 'react'
import EachSubmission from './EachSubmission'

function AllSubmissions({submissions, setSubmissions}){
  
  const currentSubmissionDisplay = submissions.map((sub) => <EachSubmission submissions={submissions} submission={sub} key={sub.id} setSubmissions={setSubmissions}/>)

      
  return(
    <div>{currentSubmissionDisplay}</div>
  )
}

export default AllSubmissions;