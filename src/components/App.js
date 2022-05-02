import { Route, Routes } from 'react-router-dom';
import { useState, useEffect} from 'react';
import '../App.css';
import Home from './HomePage/Home'
import NavBar from './NavBar.js'
import Header from './Header'
import Roster from './RosterPage/Roster'
import Assignments from './AssignmentsPage/Assignments'
import Submissions from './SubmissionsPage/Submissions'


function App() {
  const [students, setRoster] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/students")
      .then (r=>r.json())
      .then (data => setRoster(data))
  },[])

  return (
    <div>
      <Header/>
      <NavBar className="NavBar"/>
      <Routes>
        <Route exact path="/roster" element={<Roster students={students} setRoster={setRoster}/>}></Route>
        <Route exact path="/assignments" element={<Assignments/>}></Route>
        <Route exact path="/submissions" element={<Submissions students={students}/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
