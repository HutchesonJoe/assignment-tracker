import { NavLink } from "react-router-dom"

function NavBar(){
  return (
    <div className = "navbar">
      <NavLink to = "/roster" className = "nav-link">Class Roster</NavLink>
      <NavLink to = "/assignments" className = "nav-link">Assignments</NavLink>
      <NavLink to = "/submissions" className = "nav-link">Manage Submissions</NavLink>
    </div>
  )
  
}

export default NavBar;