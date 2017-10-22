/*
 import React, {Component} from 'react'
 import './index.less'
 import {connect} from 'react-redux'
 import actions from '../../store/actions/orderLsit'

 @connect(
 state => state.orderLsit,
 actions,
 )
 export default class OrderList extends Component {
 constructor() {
 super();
 this.state = {
 time: 1,
 minute: null,
 second: null,
 isflogs: false
 }
 }

 componentWillMount(){
 this.props.fetchOrderList();
 let minute, second;
 let init = new Date("1111/1/1,0:" + this.state.time + ":0");
 this.interval=setInterval(() => {
 minute = init.getMinutes();
 second = init.getSeconds();
 minute = minute < 10 ? "0" + minute : minute;
 second = second < 10 ? "0" + second : second;

 this.setState({minute:minute,second:second})

 if (minute == 0 && second == 0) {
 clearInterval(this.interval);
 return;
 }
 init.setSeconds(second - 1);
 },1000)
 }
 componentWillUnmount(){
 clearInterval(this.interval);
 }
 render() {
 // console.log(this.props.orderList);
 return (
 <div className="content">
 {
 this.props.orderList.length > 0 ?
 <ul className="order">
 {
 this.props.orderList.map((item, index) => (
 <li className="ListItem" key={index}>
 <h2>
 <i></i>
 <span>{item.serviceName}</span>
 <b>支付成功</b>
 <em>剩余{this.state.minute}分{this.state.second}</em>
 </h2>
 <p>
 <i className="iconfont icon-dingwei"></i>
 <span>{item.address}</span>
 </p>
 <p>
 <i className="iconfont icon-cshy-shizhong"></i>
 <span>{item.homeTime}</span>
 </p>
 <h3>
 <span>{item.money}</span>
 <button className="current">立即支付</button>
 <button>删除订单</button>
 </h3>
 </li>

 ))
 }
 </ul> : '数据加载中~'
 }
 </div>
 )
 }
 }*/

import React, {Component} from 'react'
import './index.less'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import actions from '../../store/actions/orderLsit'

@connect(
    // state => state.message,
    state => state,
    actions
)
export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1,
            minute: null,
            second: null,
            isflog: false
        }
    }

    componentWillMount() {
        // this.props.fetchOrderList();
        this.props.getCountDown();
    }

    render() {
        //{types: "家电清洗", money: "￥50", userAdd: "12", nowTime: "2017-10-21 - 0：21上门"}
        // console.log(this.props.orderr);
        // console.log(this.props.orderr);
        let obj = this.props.message.orderr;
        console.log(obj);
        // {types: "家电清洗", money: "￥50", userAdd: "12", nowTime: "2017-10-21 -- 938 上门服务!"}
        if(obj){
            // let {types, money, userAdd, nowTime} = obj;
        }
        return (
            <div className="content">
                <ul className="order">
                    {
                        obj !== null ?
                            <li className="ListItem">
                                <h2>
                                    <i></i>
                                    <span>{obj.types}</span>
                                    <em>{this.props.orderList.countDown.minute}:{this.props.orderList.countDown.second}</em>
                                    <b>待支付</b>
                                </h2>
                                <p>
                                    <i className="iconfont icon-dingwei"></i>
                                    <span>{obj.userAdd}</span>
                                </p>
                                <p>
                                    <i className="iconfont icon-cshy-shizhong"></i>
                                    <span>{obj.nowTime}</span>
                                </p>
                                <h3>
                                    <span>{obj.money}</span>
                                    <button>取消订单</button>
                                    <Link to='/wallet' className="current">确认支付</Link>
                                </h3>

                            </li>
                            : <li>亲，暂时没有订单~~</li>
                    }
                </ul>
            </div>
        )
    }
}