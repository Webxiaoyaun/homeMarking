import * as types from '../../actionTypes';
let initState={
    user:null,
    success:null,
    error:null,
    code:''
};

export default function (state=initState,action) {
    switch (action.type){
        case types.SET_SESSION_INFO:
            return {...state,...action.data};
        default:
            return state;
    }
}

