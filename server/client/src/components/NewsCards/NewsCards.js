import React from 'react';

import { Grid, Grow, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import NewsCard from '../NewsCard/NewsCard.js';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles.css';


const infoCards = [
    { color: '#4527a0', title: 'About the Creator', text: 'This is created by Jober Bergara' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#00838f', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({ articles, activeArticle }) => {

if(!articles.length) {
    return (
        <Grow in>
        <Grid className='card__container' container>
                {infoCards.map((infoCard) => (
                    <Grid  item xs={12} sm={6} md={4} lg={3} className='inforCard__container'>
                        <div className='card__123' style={{ backgroundColor: infoCard.color }}>
                            <Typography variant="h5">{infoCard.title}</Typography>
                            {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                            <Typography variant="h6" component="h6"><br /> <i>{infoCard.text}</i></Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

  return (
    <Grow in>
        <Grid className='card__container' container alignItems="stretch" spacing={0}>
            {articles.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }} >
                    <NewsCard activeArticle={activeArticle} i={i} article={article} />
                </Grid>
            ))}
        </Grid>
    </Grow>
  )
}

export default NewsCards