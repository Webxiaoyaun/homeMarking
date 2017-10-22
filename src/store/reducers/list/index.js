import * as types from '../../actionTypes';

let initState = {
    lists:{
        list:[],
    }
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_LISTS:
            return {...state,lists:{
                list:action.lists
            }
            };
        case types.REFRESH_GET_LISTS:
            return {...state,lists: {
                ...state.list,
                list:[...state.lists.list,...action.lists]}
            };
        default:
            return state;
    }
}