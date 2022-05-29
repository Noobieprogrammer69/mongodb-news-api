import React from 'react';

import { Link } from 'react-router-dom';

import Services from '../components/Services';

import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <h1 className='for-title'>Click or Hover the Card</h1>
      <div className='container'>
        <div className='card'>
          <div className='content'>
            <h2>01</h2>
            <h3>Covid Cases</h3>
            <p>Updated Covid Cases Using Rapid Api. Click the Covid 19 cases below </p>
            <Link to="/covid-cases/philippines">
              <small>Covid 19 cases</small>
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <h2>02</h2>
            <h3>News</h3>
            <p>Some News Api</p>
            <Link to="/news">
              <small>News</small>
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <h2>03</h2>
            <h3>Web 3.0</h3>
            <p>Ethereum BlockChain</p>
            <Link to="/blockchain">
              <small>Blockchain</small>
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="serv">
        <Services />
      </div>
    </div>
  )
}

export default Home
  