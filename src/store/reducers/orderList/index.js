import * as types from '../../actionTypes';
let initState = {
    orderList: [],//拉订单数据
    countDown:[],
    isFlag:false
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_ORDERLIST:
            return {...state, orderList: action.orderLists};
        case types.GET_COUNTDOWN:
            return {...state,isFlag:action.isFlag,countDown:action.countDown};
        default:
            return state;
    }
}