import React from 'react';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../styles/Article.css';

const Article = ({news}) => {
  return (
    <div>
      <Link to="/">
          <ArrowBackIcon className='article__-icon' />
      </Link>
        <div className='alan_container'>
          <div className='alan_card'>
          <Link to="/alan-ai-news">
            <p>Use Alan Ai</p>
          </Link>
            <div className='alan_img'>
              <img src='https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg' alt="alan-logo" />
            </div>
          </div>
        </div>
    <div className='article_container'>
      <div className='article_card'>
        <div className='imgBx'>
          <img src={news.urlToImage || 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} alt="urlImage" />
        </div>
        <div className='article_content'>
          <div>
            <h3>{news.title}</h3>
            <p>{news.content?.slice(0, 300)}</p>
            <a href={`${news.url}`}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Article