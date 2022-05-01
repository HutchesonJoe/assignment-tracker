

function EditForm({thisSub}){
  
  return(
    <form className="edit-submission">
      <input type="text" className="edit-input" placeholder={thisSub.points_earned}></input>
      <textarea className="edit-input" rows="4" placeholder={thisSub.teacher_notes}></textarea>
    </form>
  )
}

export default EditForm;