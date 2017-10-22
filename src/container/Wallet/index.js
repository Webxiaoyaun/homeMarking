import React, {Component} from 'react';
import './index.less';
export default class Wallet extends Component {
    render() {
        return (
            <div className="containers">
                <div className="top">
                    <span className="money">0.00</span>
                    <span>账号余额</span>
                </div>
                <div className="center">
                    <span className="_left">充值</span>
                    <span>提现</span>
                </div>
                <div className="add">
                    <span className="left">我的银行卡</span>
                    <span className="right"> > </span>
                </div>
            </div>
        )
    }
}
