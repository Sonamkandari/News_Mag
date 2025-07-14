import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem'; // for displaying our articles we are using news item component

const NewsBoard = ({category}) => {
  // create a use state variable
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // here we get the API key from env file
     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    // fetching this url by using fetch API
    fetch(url)
  .then(res => res.json())
  .then(data => setArticles(data.articles));
  }, [category]);

  // mount this component to app.jsx file
  return (
    <div className="container">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {/* Bootstrap grid: 3 cards per row */}
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsBoard;