import axios from 'axios';

import  { getDataApi } from '../../utils/fetchDataApi';
import { imageupload } from '../../utils/imageupload';

export const PROFILE_TYPES = {
    LOADING : 'LOADING',
    GET_USER : 'GET_USER',
}

export const getProfileUsers = ({users,id, auth}) => async (dispatch) =>{
    if(users?.every(item => item._id !== id)){
           try {
            dispatch({type: PROFILE_TYPES.LOADING, payload:{loading:true}})
            const res =  await getDataApi(`user/${id}`, auth.token)
      

            const user = res;
          
           
         
            console.log(user)
            
            dispatch({
                type:PROFILE_TYPES.GET_USER,
                payload:user.data.user
            })
           
            dispatch({type: PROFILE_TYPES.LOADING, payload:{loading:false}})
            
        } catch (err) {
            dispatch({
                type:'ALERT',
                payload:{
                    error: err.response.data.msg
                }
            })
        }
    }
}

export const updateProfile = ({editData,avatar, auth}) =>async (dispatch) =>{
    console.log({editData, avatar})
    if(!editData.fullName) return dispatch({type:"ALERT", payload:{error:"Add you fullname"}})
    if(editData.fullName.length > 25) return dispatch({type:"ALERT", payload:{error:"Fullname tooo long"}})
    if(editData.story.length >200) return dispatch({type:"ALERT", payload:{error:"story too long"}})

    try {
        let media;

        dispatch({ type: "ALERT", payload: {loading: true}})
        if(avatar) media = await imageupload([avatar])

        const res = await axios.patch("http://localhost:5000/api/user", {
            ...editData,
            avatar: avatar ? media[0].secure_url  : auth.user.avatar  
        },
        {
            headers : {Authorization: auth.token}
         } )
         
        dispatch({
            type: 'AUTH',
            payload: {
                ...auth,
                user:{
                    ...auth.user,
                    ...editData,
                    avatar: avatar ? media[0].secure_url : auth.user.avatar
                }
            }
        })

        dispatch({ type: "ALERT", payload: {loading: false}})

    } catch (err) {
        dispatch({
            type:'ALERT',
            payload:{
                error: err.response.data.msg
            }
        })
    }
}