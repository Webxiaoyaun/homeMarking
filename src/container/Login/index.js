import React,{Component} from 'react';
import logo from '../../images/logo.png';
import './index.less';
import {Link} from 'react-router-dom';
import actions from '../../store/actions/session';
import {connect} from 'react-redux';
@connect(
    state=>state.session,
    actions
)
export default class Login extends Component{
    constructor(){
        super();
        this.state={checked:false,name:'',password:''}
    }
    componentWillMount(){
        let [username,password,checked]=JSON.parse(localStorage.getItem('USER')||'[]');
        console.log(JSON.parse(localStorage.getItem('USER') || '[]'));
        if(checked){
            this.setState({name:username});
            this.setState({password:password});
            this.setState({checked:checked})
        }
    }
    changeChecked=()=>{
        this.setState({checked:!this.state.checked});
    //     // let username=this.refs.username.value;
    //     // let password=this.refs.password.value;
    //     //当表达式没走完时，不能获取他此时的状态，需要等其执行完后才能获取状态
    //
    };
    handleLogin=()=>{
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        if(/^\s*$/g.test(username)){
            alert('请输入用户名');
            return;
        }
        if(/^\s*$/g.test(password)||password.length<5||password.length>16){
            alert('请输入大于5小于16位的密码');
            return;
        }
        this.props.login({username});
        setTimeout(()=>{
            alert(this.props.success)
        },100);

        if(!this.state.checked){// flag==false  if里的判断是true时，才能走这一步的逻辑
            console.log(1);//false
            let USER=localStorage.setItem('USER',JSON.stringify([username,password,this.state.checked]));
        }else {
            console.log(2);//true
            console.log(this.state.checked);//true
            let USER=localStorage.setItem('USER',JSON.stringify([username,password,this.state.checked]));
        }

        // this.props.history.push('/');
    };
    changeUser=()=>{
        this.setState({name:this.refs.username.value});
    };
    changePassword=()=>{
        this.setState({password:this.refs.password.value});
    };
    render(){
        return (
            <div className="container">
                <img src={logo}/>
                <div>
                    <input ref="username" type="text" placeholder="请输入用户名" value={this.state.name} onChange={this.changeUser}/>
                </div>
                <div>
                    <input ref="password" type="password" placeholder="请输入密码" value={this.state.password} onChange={this.changePassword}/>
                </div>
                <div className="argument">
                    {/*当选中记住密码时，下次登录时，可以直接登录*/}
                    <input type="checkbox" required checked={this.state.checked}  onChange={this.changeChecked}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;记住密码
                </div>
                <button className="login-btn" onClick={this.handleLogin}>登录</button>
                <p>没有账号，点此<Link to="/register">注册</Link></p>
            </div>
        )
    }
}

