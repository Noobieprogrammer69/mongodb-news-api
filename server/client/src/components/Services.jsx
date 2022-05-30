import React from 'react';

import '../styles/Services.css';

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__title'>
        <h1>Services</h1>
      </div>
      <div className='services__contents'>
        <img src="https://www.imf.org/-/media/Images/IMF/Topics/COVID19/lending-tracker-fullsize-istock-1213355637.ashx?h=1413&w=2122&la=en" alt="services_img" />
        <p>Updated Covid 19 cases using API's in three different countries.<br/> COVID-19 is a completely FREE API that allows you to follow the <br />progress of the coronavirus around the world.</p>
      </div>
      <div className='services__news'>
        <img src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" alt="services_img" />
        <p>Updated News from around the world. News API is a simple,<br/> easy-to-use REST API that returns JSON search results for current<br /> and historic news articles published by over 80,000 worldwide</p>
      </div>
      <div className='services__blockchain'>
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/11/crypto-1637913891.jpg" alt="services_img" />
        <p>Blockchain cryptocurrency app. Blockchain app is connected to the blockchain, metamask <br/>pairing, interaction with smart contacts, sending Ethereum through the blockchain network, <br /> writing solidity code, and much more.</p>
      </div>
    </div>
  )
}

export default Services