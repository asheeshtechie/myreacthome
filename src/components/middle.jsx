import React, { Component } from 'react'

export default class Middle extends Component {
  render(){
    return (
        <div class="middle-container">
            
        <div class="skills">
          <h2>My Skills.</h2>

          <div class="skill-row">
            <img class="computer-image" src="images/computer.png" alt="computer-img" />
            <h3>Computer Programming</h3>
            <p>I am well versed in Python, HTML, and CSS. I have completed many Udemy and in person courses for these languages. I have been coding since I was 8 years old (now 14). If you need help with coding in any of these languages or even understanding a fundamental computer science concept, ask me!</p>
          </div>

          <div class="skill-row2">
            <img class="second-image" src="images/running.png" alt="" />
            <h3>Running (Track and Field + Cross Country)</h3>
            <p>I have been doing running as a sport since I was 12 years old. I have qualified for USATF Regionals for JO Track and Field 1500m. My 1 mile personal record is 5:58 and I am just entering freshman year of high school. My goal is to run in college and become a pro runnner. I also want to qualify for NXN (Nike Cross Nationals) in high school.</p>
          </div>

        </div>
        

     </div>

    )
  }
}