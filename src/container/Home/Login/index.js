import  React,{Component} from 'react'
import './index.less'
import loginImg from '../../../images/reg.png';
import {
    Link,
} from 'react-router-dom'


export  default class Login extends Component{

       render(){
          return(
            <Link to='/register' className="home-login">
                <img src={loginImg} alt=""/>
            </Link>
          )
       }
}