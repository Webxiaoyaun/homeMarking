import  React,{Component} from 'react'
import './index.less'
import {Link} from 'react-router-dom';
export  default class CallBack extends Component{

       render(){
          return(
            <div className="home-callback">
                <Link to="/join">
                    <i className="iconfont icon-erweima"></i>
                    <span>加盟我们</span>
                    <span>共创大业,共享双赢</span>
                </Link>

                    <Link to="/feedback">
                        <i className=" iconfont icon-xiaoxi"></i>
                        <span>意见反馈</span>
                        <span>让我们变得更好</span>
                    </Link>
            </div>
          )
       }
}
