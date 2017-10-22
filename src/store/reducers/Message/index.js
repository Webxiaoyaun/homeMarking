import * as types from '../../actionTypes';

let initState = {
    orderr:null,
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.SET_ORDER:
            return {...state,orderr:{...action.orders}};
        default:
            return state;
    }
}