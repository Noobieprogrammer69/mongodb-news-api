import React from 'react';
import { Circles } from 'react-loader-spinner';

import '../styles/Loading.css'

const Loading = ({message}) => {
  return (
    <div className='spinner'>
        <Circles
            type="Circles"
            color="00BFFF"
            height={50}
            width={50}
        />
        <p className='spinner__message'>{message}</p>
    </div>
  )
}

export default Loading