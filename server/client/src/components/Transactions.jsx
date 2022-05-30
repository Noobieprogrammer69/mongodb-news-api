import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import dummyData from '../utils/dummyData';

import '../styles/Transaction.css';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  return (
    <div className='card__transaction'>

    </div>
  )
}

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className='transaction__container'>
      {currentAccount ? (
        <h2 className='latest__transactions'>Latest Transactions</h2>
      ) : (
        <h2 className='latest__transactions'>Connect your account to see the latest transactions</h2>
      )}

      <div className='transaction__contents'>
        {dummyData.reverse().map((transaction, i) => (
          <TransactionCard key={i} {...transaction} />
        ))}
      </div>
    </div>
  )
}

export default Transactions