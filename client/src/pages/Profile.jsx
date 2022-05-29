import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import ProfileInfo from '../components/ProfileInfo';
import { getProfileUsers } from '../redux/actions/profileActions';

const Profile = () => {
    const [userData, setUserData] = useState([]);

    const { auth, profile } = useSelector(state => state); 
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        if( id === auth.user?._id  ) {
            setUserData([auth.user]) // it should be in array . as we declared it.
        }else{
        
            dispatch(getProfileUsers({users: profile?.users, id , auth}))
            const newData = profile?.users.filter(user=> user?._id === id)
            setUserData(newData)   //this is already an array.
            
        }
    },[id, auth, dispatch, profile?.users])
    

  return (
    <div>
        <ProfileInfo userData={userData} dispatch={dispatch} profile={profile} auth={auth} id={id} />
    </div>
  )
}

export default Profile