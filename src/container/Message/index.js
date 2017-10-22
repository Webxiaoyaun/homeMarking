import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from '../../store/actions/list';

@connect(
    state => state.list,
    actions
)
export default class Message extends Component{
    handelClick=()=>{
        let telVal=this.refs.tel.value;
        let types=this.props.lists.list[0].types;
        let money=this.props.lists.list[0].price;
        let userAdd=this.refs.userAdd.value;
        let time=new Date();
        let h = time.getHours();
        let mi = time.getMinutes();
        let y =time.getFullYear();
        let m =time.getMonth();
        let d = time.getDate();
        let nowTime = `${y}-${m+1}-${d} -- ${h}${mi} 上门服务!`;
        console.log(actions);
        this.props.setOrder({types,money,userAdd,nowTime});

        let reg=/^1[345789]\d{9}$/g;
        if(reg.test(telVal)){
            this.props.history.push('/order')
        }else{
            alert('请输入正确的手机号');
            return;
        }
    };
    handleActive=(e)=>{
        /*let house=this.refs.house.className;
        let company=this.refs.company.className;
        let school=this.refs.school.className;
        let container=this.refs.container.children;
        for(var i=0;i<container.length;i++){
            console.log(container[i].className);
        }*/
        let spanActive=e.target.className;
        if(spanActive=='house'){
            e.target.className+=' active';
        }else if(spanActive=='school'){
            e.target.className+=' active';
        }else if(spanActive=='company'){
            e.target.className+=' active';
        }


    };
    render() {
        return (
            <ul className="messages">
                <li className="message-item">
                   <div>
                       <label htmlFor="user-name">联系人</label>
                       <input ref="username" required type="text" id="username" placeholder="姓名"/>
                   </div>
                    <div className="sexs">
                        <p>
                            <input type="radio" name="sex"/>
                            <span>男</span>
                        </p>
                        <p>
                            <input type="radio" name="sex"/>
                            <span>女</span>
                        </p>
                    </div>
                </li>
                <li className="message">
                    <div>
                        <label htmlFor="user-tel">电话</label>
                        <input ref="tel" required type="text" id="user-tel" placeholder="手机号码"/>
                    </div>
                </li>
                <li className="message">
                    <div>
                        <label htmlFor="user-address">地址</label>
                        <input ref="userAdd" required type="text" id="user-address" placeholder="请输入地址"/>
                    </div>
                </li>
                <li className="message">
                    <div>
                        <label htmlFor="username">门牌号</label>
                        <input required type="text" id="username" placeholder="例：5号楼201室"/>
                    </div>
                </li>
                <li className="tag">
                    <div>
                        <span className="tab">标签</span>
                        <p ref="container" onClick={this.handleActive}>
                            <span className="house" ref="house">家</span>
                            <span className="company" ref="company">公司</span>
                            <span className="school" ref="school">学校</span>
                        </p>
                    </div>
                </li>
                <li className="message">
                    <button onClick={this.handelClick}>确定</button>
                </li>
            </ul>
        )
    }
}