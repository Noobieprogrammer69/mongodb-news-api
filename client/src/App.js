import React, { useEffect } from 'react';

import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Register, Login, Home, Profile } from './pages/index';
import { AlanAi, BlockChain, Header } from './components';

import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authActions';
import { FetchApi, UsaFetch, NewsFetchApi, JapanFetch } from './components/API/index';
import PrivateProfile from './utils/PrivateRouter';

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        {auth.token && <Header />}
          <Routes>
            <Route exact path='/register' element={<Register />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/' element={auth.token ? <Home /> : <Login />}></Route>
            <Route exact path='/covid-cases/philippines' element={<FetchApi />}></Route>
            <Route exact path='/covid-cases/usa' element={<UsaFetch />}></Route>
            <Route exact path='/covid-cases/japan' element={<JapanFetch />}></Route>
            <Route exact path='/news' element={<NewsFetchApi />}></Route>
            <Route exact path='/alan-ai-news' element={<AlanAi />}></Route>
            <Route exact path='/blockchain' element={<BlockChain />}></Route>
            <Route exact path='/profile/:id' element={<PrivateProfile><Profile /></PrivateProfile>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
