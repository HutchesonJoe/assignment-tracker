// import React from 'react';
import applePic from './images/an_vision-gDPaDDy6_WE-unsplash.jpeg'

function Home(){
  return (
    <>
     
      <div className="about">
        <img src={applePic} alt = "apple" id="apple-pic"/>
      <div id="about-text-box">
        <p id="home-text">Providing teachers with a convenient system to keep track of their students, assignments, and submissions. </p>
        <ul id="function-list">
          <li>Create New Assignments</li>
          <li>Record New Student Submissions</li>
          <li>Update Existing Student Submissions</li>
        </ul>
      </div>
        
      </div>
    </>
    
  )
}

export default Home; 