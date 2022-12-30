import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, publishedAt, source} = this.props
    let date = new Date(publishedAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric",  hour: 'numeric', minute: 'numeric'})
    return (
        <div className="card">
            <a href={newsUrl} target="_blank" rel="noreferrer">
              <img src={imageUrl} className="card-img-top card-imgage" alt="News"/>
              </a>
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{description}</p>
                <p>
                  <strong>Source: {source}<br/></strong>
                  {date}
                </p>
                <div className='btn-read-more'>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}
