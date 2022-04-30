import { NavLink } from 'react-router-dom'

function Header(){
  return (
    <NavLink to = "./">
      <div className="header">
      Assignment Tracker
      </div>
    </NavLink>
    
  )
}

export default Header;