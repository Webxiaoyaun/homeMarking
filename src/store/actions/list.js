import * as types from '../actionTypes';
import {getLists} from '../../api/home';


export default {
    //thunk中间件会将这个fetchSliders函数执行，并且让返回的那个函数 赋值给 fetchSliders
    fetchSliders: function () {
        return (dispatch, getState) => {
            get('/sliders').then(sliders => {
                dispatch({
                    type: 'GET_SLIDER',
                    sliders
                })
            })
        }
    },
    fetchList: function (type, limit) {
        return (dispatch, getState) => {
            getLists(type, limit).then(lists => {
                dispatch({
                    type: types.GET_LISTS,
                    lists
                })
            })
        }
    },
    refreshList: function (type = 1, limit = 4) {
        return (dispatch, getState) => {
            getLists(type, limit).then(lists => {
                dispatch({
                    type: types.REFRESH_GET_LISTS,
                    lists
                });
            })
        }
    },

    //给order页面传递数据的方法
    setOrder: function (orders) {
        console.log(orders);
        return (dispatch, getState) => {
            dispatch({
                type: types.SET_ORDER,
                orders
            })
        }
    },
}