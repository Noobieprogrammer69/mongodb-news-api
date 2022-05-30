import React from 'react';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import moment from 'moment';

import '../styles/NewsArticle.css';

const NewsArticle = ({article}) => {
  return (
    <div>
      <Link to="/">
        <ArrowBackIcon className='icon' />
      </Link>
      <h1 className='for-title'>Covid-19 Cases</h1>
      <div className='for__categories'>
        <Link to="/covid-cases/usa">
            <p>USA</p>
        </Link>
      </div>
      <div className='for__categories-usa'>
        <Link to="/covid-cases/japan">
            <p>JAPAN</p>
        </Link>
      </div>
      <div className='container'>
        <div className='article-container'>
          <div className='article-contents'>
            <h2>{article.country}</h2>
            <p>Covid 19 cases as of {moment(article.time).format('YYYY/MM/DD HH:mm z')}</p>
            <h2>New Cases</h2>
            <div className='new-cases'>
              <p className='new-p'>new cases {article.cases.new}</p>
              <p>new recovered: {article.cases.recovered}</p>
              <p className='new-critical'>new critical cases: {article.cases.critical}</p>
              <p>new active cases: {article.cases.active}</p>
              <p>Total cases: {article.cases.total}</p>
            </div>
            <div className='new-deaths'>
              <p>new deaths: {article.deaths.new}</p>
              <p>total deaths: {article.deaths.total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsArticle