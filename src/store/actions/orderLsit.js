import {get} from '../../../utils/index.js'
export default {
    fetchOrderList: function () {
        return (dispatch, getState) => {
            get('/order').then(orderLists => {
                dispatch({
                    type: 'GET_ORDERLIST',
                    orderLists
                })
            })
        }
    },
    //获取订单页倒计时数据方法
    getCountDown: function () {
        return (dispatch, getState) => {
            let {orderList} = getState();
            if (orderList.isFlag === false) {
                let interval, minute, second;
                let init = new Date("1111/1/1,0:" + 1 + ":0");
                interval = setInterval(() => {
                    minute = init.getMinutes();
                    second = init.getSeconds();
                    minute = minute < 10 ? "0" + minute : minute;
                    second = second < 10 ? "0" + second : second;
                    dispatch({
                        type: 'GET_COUNTDOWN',
                        countDown: {
                            minute: minute,
                            second: second
                        }
                    });
                    if (minute == 0 && second == 0) {
                        clearInterval(interval);
                        return false;
                    }
                    init.setSeconds(second - 1);
                }, 1000)
            }
        }
    }
}


