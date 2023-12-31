import React from 'react'

export default function NewsItem(props) {
  let{title, description, imgUrl,newsUrl, author, date,source} = props
  return (
    <div className='my-3'>
    <div className="card">
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: "93%", zIndex: "1"}}>{source} </span>
      <img src={!imgUrl?"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg":imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}....</p>
        <p className='card-text'> <small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
  </div>
  )
}

