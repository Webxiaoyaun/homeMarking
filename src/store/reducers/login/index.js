import * as types from '../../actionTypes';
let initState={
    user:null,
    success:null,
    error:null,
    code:null
};

export default function (state=initState,action) {
    switch (action.type){
        case types.SET_SESSION_INFO:
            return action.login;
        default:
            return state;
    }
}

