import EachSubByAssign from "../allsubmissions/AllSubCard"

function AssignSubCard({assignment}){
console.log(assignment)
const submissions = assignment.submissions.map((sub)=><EachSubByAssign submission={sub} key={sub.id}/>)
return(
  <div>
    <h2 className="assignment-name">Assignment #{assignment.id}: {assignment.description}</h2>
    <div>{submissions}</div>
  </div>
)
}

export default AssignSubCard;