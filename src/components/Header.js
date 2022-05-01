import { NavLink } from 'react-router-dom'

function Header(){
  return (
    <NavLink to = "./">
      <div className="header">
      <p className="header-text">Assignment Tracker</p>
      <p>An Online GradeBook</p>
      </div>
    </NavLink>
    
  )
}

export default Header;