import React,{Component} from 'react'
import './index.less'
export default class Balance extends Component{
    render(){
        return (
            <div className="containers">
                <div className="top">
                    <span className="money">0.00</span>
                    <span>账号余额</span>
                </div>
                <div className="centers">
                    <span className="_lefts">充值</span>
                    <span>提现</span>
                </div>
                <div className="adds">
                    <span className="lefts">我的银行卡</span>
                    <span className="rights"> > </span>
                </div>
            </div>
        )
    }
}