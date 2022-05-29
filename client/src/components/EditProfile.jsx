import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/actions/profileActions';

import CloseIcon from '@material-ui/icons/Close';

import '../styles/EditProfile.css';
const EditProfile = ({user, setOnEdit}) => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    const initState = {fullName: '', story: '', phone: '', address: ''};
    const [editData, setEditData] = useState(initState);
    const {fullName, story, phone, address} = editData;
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        setEditData(user)
    }, [user])

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setEditData({...editData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({editData, auth}))
        setOnEdit(false);
    }

  return (
        <div className='edit__div'>
            <div className='edit__title'>
                <h1>Edit Profile</h1>
            </div>
            <div className='edit__button'>
                <CloseIcon onClick={() => setOnEdit(false)} />
            </div>
            <div className="editprofile-userdata">
                    <label htmlFor="fullname">Fullname</label>
                    <div className="editprofile-userdatafullname">
                        <input type="text" value={fullName} onChange={handleChangeInput} name="fullName" placeholder="Type your Name" />
                        <small>{fullName.length}/25</small>
                    </div>
                    <label htmlFor="address">Address</label>
                    <div className="editprofile-userdataaddress">
                        <input type="text" value={address} onChange={handleChangeInput} name="address" placeholder="Type your Address" />
                    </div>
                    <label htmlFor="phone">Phone</label>
                    <div className="editprofile-userdataphone">
                        <input type="text" value={phone} onChange={handleChangeInput} name="phone" placeholder="Type your Phone" />
                        <small>{phone.length}/11</small>
                    </div>
                    <label htmlFor="story">Story</label>
                    <div className="editprofile-userdatastory">
                        <input type="text" value={story} onChange={handleChangeInput} name="story" placeholder="Type your Bio" />
                        <small>{story.length}/200</small>
                    </div>
                    <button onClick={handleSubmit} className="editprofile-userdata-submit__button text-white">Submit</button>
                </div>
        </div>
  )
}

export default EditProfile