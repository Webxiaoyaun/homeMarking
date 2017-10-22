import React,{Component} from 'react';
import logo from '../../images/logo.png';
import './index.less';
import {Link} from 'react-router-dom';
import actions from '../../store/actions/session';
import {connect} from 'react-redux';
import {getCode} from '../../../utils/index';
// import {register,session} from '../../store/actions/session';
@connect(
    state=>state.session,
    actions
)

// }
export default class Register extends Component{
    constructor(){
        super();
        this.state={checked:true,num:''}
    }
    changeChecked=()=>{
        this.setState({checked:!this.state.checked})
    };
    handleClick=()=>{
        let username=this.refs.username.value;
        // let mobile=this.refs.mobile.value;
        let password1=this.refs.password1.value;
        let password2=this.refs.password2.value;
        if(/^\s*$/g.test(username)){
            alert('请输入用户名');
            return;
        }
        /*if(!/^1[3|4|5|8][0-9]\d{4,8}$/g.test(mobile)){
            alert('请填写正确的手机号码');
            return;
        }*/
        if(/^\s*$/g.test(password1)||password1.length<5||password1.length>16){
            alert('请输入大于5小于16位的密码');
            return;
        }
        if(password1!==password2){
            alert('两次输入的密码不一样');
            return;
        }
        if(this.state.num.toLowerCase()!==this.refs.idenCode.value.toLowerCase()){
            alert('输入的验证码不正确');
            let num=getCode();
            // console.log(num);
            this.setState({num});
            return;
        }
        if(this.state.checked){
            this.props.register({username});
            setTimeout(()=>{
                console.log(this.props.code);
                if(this.props.code===0){
                    alert(this.props.success);
                    this.props.history.push('/login');
                }else if(this.props.code===1){
                    alert(this.props.error);
                }
            },50)
        }
        else {
            // this.props.history.go(-1);
            this.props.history.push('/login');
            alert('需同意用户协议');
        }
    };
    componentWillMount(){
        let num=getCode();
        // console.log(num.toLowerCase());
        this.setState({num});
    }
    identifyCode=()=>{
        let num=getCode();
        this.setState({num});
    };
    render(){

        return (
            <div className="container">
                <img src={logo}/>
                <div>
                    <input ref="username" type="text" placeholder="请输入用户名"/>
                </div>
                {/*<div>
                    <input ref="mobile" type="mobile" placeholder="请输入手机号"/>
                </div>*/}
                <div>
                    <input ref="password1" type="password" placeholder="请输入密码"/>
                </div>
                <div>
                    <input ref="password2" type="password" placeholder="再次输入密码"/>
                </div>
                <div>
                    <input type="text" placeholder="请输入验证码" className="identify-code" ref="idenCode"/>
                    <i ref="btn" onClick={this.identifyCode}>{this.state.num}</i>
                </div>
                <div className="argument">
                    <input type="checkbox" checked={this.state.checked}  onChange={this.changeChecked}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;同意
                    <a href="javascript:;">《啊玉加帮用户协议》</a>
                </div>
                <button className="register-btn" onClick={this.handleClick}>注册</button>
                <p>已有账号，点此<Link to="/login">登录</Link></p>
            </div>
        )
    }
}
