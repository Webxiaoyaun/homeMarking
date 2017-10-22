import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import idea from '../../images/i3.png';
import about from '../../images/i4.png';
import call from '../../images/i5.png'
import wallet from '../../images/i1.png';
import map from '../../images/i2.png';
import LoadPicture from "../../components/LoadPicture/index";

export default class Profile extends Component {
    render() {
        let user = JSON.parse(localStorage.getItem('USER'));

        return (
            <div className="cont">
                <div className="profile-logo">
                    <LoadPicture/>
                    <Link to="/login">{user[0]}</Link>
                </div>
                <ul className="profile-number">
                    <li>
                        <Link to='/wallet'>
                            <h5>100</h5>
                            <p>余额</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wallet">
                            <h5>100</h5>
                            <p>积分</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wallet">
                            <h5>100</h5>
                            <p>优惠券</p>
                        </Link>
                    </li>
                </ul>
                <ul className="profile-wallet">
                    <li>
                        <Link to="/wallet">
                            <img src={wallet} alt=""/>
                            <span>钱包</span>
                            <i className="iconfont icon-arrow-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                        <img src={map} alt=""/>
                        <span>服务地址</span>
                        <i className="iconfont icon-arrow-right"></i>
                        </Link>
                    </li>
                </ul>
                <ul className="profile-idea">
                    <li>
                        <Link to="/feedback">
                        <img src={idea} alt=""/>
                        <span>意见反馈</span>
                        <i className="iconfont icon-arrow-right"></i>
                        </Link>
                    </li>
                    <li>
                        <img src={about} alt=""/>
                        <span>关于我们</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </li>
                    <li>
                        <img src={call} alt=""/>
                        <span>呼叫客服</span>
                        <p><em>2427698</em>
                            <b className="iconfont icon-arrow-right"></b></p>
                    </li>
                </ul>
            </div>
        )
    }
}
