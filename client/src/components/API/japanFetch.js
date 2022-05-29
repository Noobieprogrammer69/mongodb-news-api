import React, { useState, useEffect } from 'react';
import JapanFetchApi from '../JapanFetchApi';

import './../../styles/NewsArticle.css'

function JapanFetch() {
    const [japanData, setJapanData] = useState([]);
    const [loading, setLoading] = useState(false);

    const japanCases = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'bf017e85femsh3c97d252f3dedaep12c5a8jsn383d594f03c0'
        }
    };

    const japanFetch = () => {
        fetch('https://covid-193.p.rapidapi.com/history?country=japan&day=2022-05-25', japanCases)
        .then(response => response.json())
        .then((json) => {
            setJapanData(json);
        })
    }

    useEffect(() => {
        setLoading(true);
        japanFetch()
        setLoading(false)
    }, []);

    if(loading) {
        return <p>Loadin...</p>
    }

  return (
    <div className='for-test'>
       {japanData.response?.map((jCases, i) => <JapanFetchApi jCases={jCases} key={i} />)}
    </div>
  )
}

export default JapanFetch;