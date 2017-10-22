import * as types from '../actionTypes';
import {register,login} from '../../api/session';
import {push} from 'react-router-redux';
export default {
    register(user){
        return function (dispatch,getState) {
            register(user).then((data)=>{
                console.log(data);
                dispatch({
                    type:types.SET_SESSION_INFO,
                    data
                });
                if(data.code==0){
                    setTimeout(()=>{
                        dispatch(push('/login'));
                    },100)
                }
            })
        }
    },
    login(user){
        return function (dispatch,getState) {
            login(user).then((data)=>{
                // let {code,success}=data;
                console.log(data);
                dispatch({
                    type:types.SET_SESSION_INFO,
                    data
                });
                if(data.code==0){
                    setTimeout(()=>{
                        dispatch(push('/'));
                    },200)
                }
            })
        }
    }
}


