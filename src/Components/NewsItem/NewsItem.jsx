import React from 'react';

const NewsItem = ({ title, description, src, url }) => (
  <div className="card bg-dark text-light mb-3 d-line-block my-3 mx-3 px-2 py-2">
    <img
      src={src}
      style={{ height: '200px', width: '100%' }}
      className="card-img-top"
      alt={title.slice(0, 50) + '...'}
    />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0, 50)}</h5>
      <p className="card-text">
        {description ? description.slice(0, 90) : 'Click through to read the full article'}
      </p>
      <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  </div>
);

export default NewsItem;
