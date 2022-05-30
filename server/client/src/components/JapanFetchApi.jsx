import React from 'react';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import moment from 'moment';

import '../styles/NewsArticle.css';

const JapanFetchApi = ({jCases}) => {
  return (
      <div>
        <Link to="/">
            <ArrowBackIcon className='icon' />
        </Link>
        <h1 className='for-title'>Covid-19 Cases</h1>
        <div className='for__categories'>
            <Link to="/covid-cases/philippines">
                <p>Philippines</p>
            </Link>
        </div>
        <div className='for__categories-usa'>
            <Link to="/covid-cases/usa">
                <p>USA</p>
            </Link>
        </div>
        <div className='container'>
            <div className='article-container'>
            <div className='article-contents'>
                <h2>{jCases.country}</h2>
                <p>Covid 19 cases as of {moment(jCases.time).format('YYYY/MM/DD HH:mm z')}</p>
                <h2>New Cases</h2>
                <div className='new-cases'>
                <p className='new-p'>new cases {jCases.cases.new}</p>
                <p>new recovered: {jCases.cases.recovered}</p>
                <p className='new-critical'>new critical cases: {jCases.cases.critical}</p>
                <p>new active cases: {jCases.cases.active}</p>
                <p>Total cases: {jCases.cases.total}</p>
                </div>
                <div className='new-deaths'>
                <p>new deaths: {jCases.deaths.new}</p>
                <p>total deaths: {jCases.deaths.total}</p>
                </div>
            </div>
            </div>
        </div>
</div>
  )
}

export default JapanFetchApi