import React, { useState } from 'react';

import '../styles/ProfileInfo.css';
import EditProfile from './EditProfile';

const ProfileInfo = ({userData, dispatch, auth, profile, id}) => {
    const [onEdit, setOnEdit] = useState(false);

    const initState = {fullName: '', story: '', phone: '', address: ''};
    const [editData, setEditData] = useState(initState);
    const {website, fullname, story, phone, address} = editData;

  return (
    <div className='main__container'>
        {userData?.length > 0 && userData.map(user => (
            <div className='profile__card'>
                <div className='profile__imgBx'>
                    <img src="https://source.unsplash.com/1600x900/?nature,anime,photography,technology" alt="user-pic" />
                </div>  
                <div className='profile__content'>
                    <div className='profile__details'>
                        <h2>{user.fullName}<br /><span>{user.userName}</span></h2>
                        <p className='phone'>Phone number: {user.phone}</p>
                        <p className='address'>Address: {user.address}</p>
                        <p className='bio'>Bio: {user.story}</p>
                        <div className='edit__profile'>
                            <button onClick={() => setOnEdit(true)}>Edit Profile</button>
                        </div>
                    </div>
                </div>
                <div>
                    {onEdit && <EditProfile user={user} setOnEdit={setOnEdit} />}
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProfileInfo