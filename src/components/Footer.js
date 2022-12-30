import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">Daily News</span>
          </div>
      
          <div className="col-md-4 justify-content-end list-unstyled d-flex">
            <a className="text-dark" href="https://twitter.com/dkjhaj2ee" target="_blank" rel="noreferrer"><i className="fa fa-twitter"/></a>
            <a className="text-dark" href="https://www.linkedin.com/in/dkjhaj2ee" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"/></a>
            <a className="text-dark" href="https://github.com/dkjhaj2ee" target="_blank" rel="noreferrer"><i className="fa fa-github"/></a>
          </div>
        </footer>
      </div>
    )
  }
}
