import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/actions/authActions';

import 'animate.css';

import '../styles/Header.css'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

  return (
        <div className='nav-container'>
                <div className='nav__logo-title'>
                    <h1>NewsAPI</h1>
                </div>
            <div className='nav__contents'>
            <Link to={`profile/${auth.user._id}`}>
                <div className="for__avatar">
                    <Avatar src={auth.user.avatar} />
                </div>
            </Link>
                <Link to="/">
                    <IconButton>
                        <HomeIcon className='home' />
                    </IconButton>
                </Link>
                <IconButton onClick={() => dispatch(logout())}>
                    <ExitToAppIcon className='home'  />
                </IconButton>
                <IconButton>
                    <ExploreIcon className='home'  />    
                </IconButton> 
            </div>
            <div className='toggleMenu-container'>
                <MenuIcon onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='toggleMenu__contents-container'>
                        <div className='toggleMenu__contents'>
                        <Link to={`profile/${auth.user._id}`}>
                            <div className="for__avatar">
                                <Avatar src={auth.user.avatar} />
                            </div>
                        </Link>   
                        <Link to="/">
                            <IconButton>
                                <HomeIcon className='home' />
                            </IconButton>
                        </Link>
                        <IconButton onClick={() => dispatch(logout())}>
                            <ExitToAppIcon className="home" />
                        </IconButton>
                        <IconButton>
                            <ExploreIcon className="home" />    
                        </IconButton> 
                        </div>
                        <div className='toggleMenu-closeIcon'>
                            <CloseIcon onClick={() => setToggleMenu(false)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Header