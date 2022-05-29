import React, { useState, useEffect, useLayoutEffect } from 'react';
import btn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import '../styles/AlanAi.css';

import useStyles from '../styles.js';
import NewsCards from './NewsCards/NewsCards';
import { Typography } from '@material-ui/core';

const alankey = 'f6d183dac41c7023e511e1f176dbc9212e956eca572e1d8b807a3e2338fdd0dc/stage';

const AlanAi = () => {
  const classes = useStyles();

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    function updateScreen(time) {
              btn({
          key: alankey,
          onCommand: ({ command, articles, number }) => {
              if (command === 'newHeadlines') {
                setNewsArticles(articles);
                setActiveArticle(-1);
              } else if (command === 'instructions') {
                setIsOpen(true);
              } else if (command === 'highlight') {
                setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
              } else if (command === 'open') {
                const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                const article = articles[parsedNumber - 1];
      
                if (parsedNumber > articles.length) {
                  btn().playText('Please try that again...');
                } else if (article) {
                  window.open(article.url, '_blank');
                  btn().playText('Opening...');
                } else {
                  btn().playText('Please try that again...');
                }
              }
            },
          });
    }
      requestAnimationFrame(updateScreen);
  }, [])

  return (
    <div>
      <div>
          <img src="https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" className={classes.alanLogo} alt="logo" />
      </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default AlanAi