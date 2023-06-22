import React, { Component } from 'react'

export default class Top extends Component {
  render(){
    return (
        <div class = "top-container">
            <img class = "topcloud" src="images/cloud.png" alt="cloud-img" />

            <h1>Hi my name is Aayush.</h1>
            <h2 class="desc">I love running and programming.</h2>
        
            <img class = "bottomcloud" src="images/cloud.png" alt="cloud-img"/>
            
        </div>
    )

  }
}