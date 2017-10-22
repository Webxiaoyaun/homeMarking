import React, {Component} from 'react';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
@connect(
    state=>state.session,
    actions
)
export default class feedBack extends Component {
    constructor() {
        super();
        this.state = {
            list:[]
        }
    }
    handleClick = ()=>{
        let btn = this.refs.tt;
        let username = btn.value;
        // console.log(username);
        let arr = this.state.list;
        arr.push(username);
        console.log(arr);
        this.setState({
            list:arr
        });
        btn.value = '';
    };

    render() {
        // console.log(this.state.list);
        return (
            <div className="feed-container">
                <div className="feed-message">
                    <ul>
                        <li>
                            <span>丽丽:</span>
                            <p>哈哈，服务太好了！</p>
                        </li>
                        {
                            this.state.list.map((item,index)=>{
                               return <li key={index}>
                                    <span>{this.props.user?this.props.user.username:''}:</span>
                                    <p>{item}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <textarea ref="tt" id="feed-from" placeholder="请输入反馈内容"></textarea>
                <button className="feed-btn" type="button" onClick={this.handleClick}>提 交</button>
            </div>
        )
    }
}
