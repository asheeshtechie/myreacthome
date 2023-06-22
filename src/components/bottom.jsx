import React, { Component } from 'react'

export default class Bottom extends Component {
  render(){
    return (
        <div class="bottom-container">

        <img class="instagram-img footer-img" src="images/instagram.png" alt="instagram-img" />
        <a class="footer-link1 footer-link" href="https://google.com/">Instagram</a>

        <img class="github-img footer-img" src="images/github.png" alt="github-img" />
        <a class="footer-link2 footer-link" href="https://google.com/">Git Hub</a>

        <img class="strava-img footer-img" src="images/strava.png" alt="strava-img" />
        <a class="footer-link3 footer-link" href="https://google.com/">Strava</a>

        <p class="copyright">© 2020 Aayush Asthana.</p>

      </div>
    )
  }
}
