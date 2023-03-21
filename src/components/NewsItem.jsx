/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div><div className="card my-3"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
                <img className="card-img-top" src={imageUrl ? imageUrl : "https://sigma.world/fileadmin/SiGMA-news-preview.png"} alt="news headline image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-outline-info">Read more</a>
                </div>
            </div></div>
        )
    }
}