import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/react-daily-news/">Daily News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/">General</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/business">Business</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/entertainment">Entertainment</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/health">Health</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/science">Science</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/sports">Sports</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/react-daily-news/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
