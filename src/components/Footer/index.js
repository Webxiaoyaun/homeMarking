import  React,{Component} from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'

export  default class Footer extends Component{

       render(){
          return(
            <nav className="footer">
              <NavLink exact to="/" activeStyle={{color: '#fe3360'}}>
                  <i className="iconfont icon-shouye-s"></i>
                  <span>首页</span>
              </NavLink>
              <NavLink to="/order" activeStyle={{color: '#fe3360'}}>
                  <i className="iconfont icon-dan"></i>
                  <span>订单</span>
              </NavLink>
              <NavLink to="/profile" activeStyle={{color: '#fe3360'}}>
                  <i className="iconfont icon-houdongfangiconfont07"></i>
                  <span>个人信息</span>
              </NavLink>
            </nav>
          )
       }
}
