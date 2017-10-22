import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

//导入home 模块的reducer
import home from './home/index'
import orderList from './orderList/index'
import session from './session/index';
import list from './list/index';
import message from './Message/index';

export default combineReducers({
    home,
    list,
    orderList,
    session,
    message,
    routerReducer
})
