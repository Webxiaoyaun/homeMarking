import * as types from '../actionTypes';
import {register,login} from '../../api/login';
import {push} from 'react-router-redux';
export default {
    register(user){
        return function (dispatch,getState) {
            register(user).then((data)=>{
                console.log(data);
                let {code,...login}=data;
                console.log(code);
                dispatch({
                    type:types.SET_SESSION_INFO,
                    login
                });
                if(code==0){
                    dispatch(push('/login'));
                }
            })
        }
    },
    login(user){
        return function (dispatch,getState) {
            login(user).then((data)=>{
                let {code,...login}=data;
                dispatch({
                    type:types.SET_SESSION_INFO,
                    login
                });
                if(code==0){
                    dispatch(push('/'));
                }
            })
        }
    }
}


