import React, { useContext } from 'react';

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from '../context/TransactionContext';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Transactions from './Transactions';

import { shortenAddress } from '../utils/shortenAddress';

import '../styles/Blockchain.css';
import Loader from './Loader';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
    />
)

const BlockChain = () => {
    const { connectWallet, currentAccount, formData, handleChange, isLoading, sendTransaction } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();

    }

  return (
    <div className='blockchain__container'>
        <div className='blockchain__container-container'>
            <div className='blockchain__contents'>
            <Link to="/">
                <ArrowBackIcon className='icon' />
            </Link>
                <h1 className='blockchian__title'>
                    Send Crypto <br /> across the world
                </h1>
                <p className='blockchain__p'>
                Explore the crypto world. Buy and sell <br /> cryptocurrencies easily on Krypto.
                </p>
                {!currentAccount && (
                    <button className='connect__button' type="button" onClick={connectWallet}>
                        <p className='connect__p'>Connect Wallet</p>
                    </button>
                )}

                <div className='ethereum__container'>
                    <div className='etheruem__container-container eth-card'>
                        <div className='ethereum__contents'>
                            <div className='eteherum__contents-contents'>
                                <div className='eteherum'>
                                    <SiEthereum fontSize={50} color="#fff" />
                                </div>
                                    <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                        </div>
                        <p className='ethereum__currentAccount'> 
                            {shortenAddress(currentAccount)}
                        </p>
                        <p className='ethereum-p'>
                            Ethereum
                        </p>
                    </div>
                </div>

                <div className='blockchain__place '>
                    <div className='blockchain__card blue-glassmorphism'>
                        <div className='blockchain_contents'>
                            <Input placeholder="Address To" type="text" name="addressTo" handleChange={handleChange}/>
                            <br />
                            <Input placeholder="Amout (ETH)" type="number" name="amount" handleChange={handleChange}/>
                            <br />
                            <Input placeholder="Keyword (GIF)" type="text" name="keyword" handleChange={handleChange}/>
                            <br />
                            <Input placeholder="Enter Message" type="text" name="message" handleChange={handleChange}/>
                            <div className='blockchain__send'>
                                {isLoading ? <Loader />
                                : (
                                    <button onClick={handleSubmit} type="button" className='blockchain__button'>
                                        Send Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='transaction'>
            <Transactions />
        </div> */}
    </div>
  )
}

export default BlockChain