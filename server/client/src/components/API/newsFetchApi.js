import React, { useState, useEffect } from 'react';

import { Article } from '..';

import './../../styles/NewsArticle.css'

function NewsFetchApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNewsApi = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5de26851a94f486fabe82c0e6700a42f')
        .then(response => response.json())
        .then((json) => {
            setData(json);
        })
    }

    useEffect(() => {
        setLoading(true);
        getNewsApi()
        setLoading(false)
    }, []);

    if(loading) {
        return <p>Loadin...</p>
    }

  return (
    <div className='for-test'>
        {data.articles?.map((news) => <Article news={news} />)}
    </div>
  )
}

export default NewsFetchApi