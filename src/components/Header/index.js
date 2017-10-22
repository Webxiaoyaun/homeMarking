import  React, {Component} from 'react'
import './index.less'

export  default class Header extends Component {

    handleClick = () => {
        window.history.go(-1);
    };

    render() {
        let path = window.location.hash;
        // console.log(path);
         path = path.slice(1);
         //#/list/1
         // console.log(path);
        if (!path) {
            console.log('nononono');
            this.setState({})
        }
        if(path.indexOf('list')>=0){
            let reg = /\/([a-z]+)\/\d/g;
            // console.log(path);
            path = (reg.exec(path))[1];
        }
        return (
            <div className="header">
                <span onClick={this.handleClick}>&lt;</span>
                {
                    (function () {
                        switch (path) {
                            case '/':
                                return '首页';
                            case  '/order':
                                return '订单页';
                            case  '/login':
                                return '登录页';
                            case  '/register':
                                return '注册页';
                            case  '/profile':
                                return '个人中心';
                            case  'list':
                                return '列表页';
                            case  '/message':
                                return '支付信息页';
                            case  '/map':
                                return '服务地址';
                            case  '/feedback':
                                return '意见反馈页';
                            case  '/join':
                                return '加盟我们 共创辉煌';
                            case  '/wallet':
                                return '个人钱包';
                            default:
                                return '哈哈'
                        }

                    })()
                }
            </div>
        )
    }
}
