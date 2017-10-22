import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import {getLists} from '../../api/home';
import more from '../../images/more.gif';
import down from '../../images/down2.gif';
import {connect} from 'react-redux';
import actions from '../../store/actions/list';
import {upLoadMore, downRefresh} from './utils';
let limit = 4;


@connect(
    state => state.list,
    actions
)
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            lists: {
                list: []
            },
            text: '加载更多',
            typ: '',
            texts:'正在刷新',
        }
    }
    /*handleClick=()=>{
     let user=localStorage.getItem('USER');
     console.log(user);
     if(user){
     this.props.history.push('/home')
     }else{
     this.props.history.push('/login')
     }
     };*/
    handleMore = () => {
        this.refs.img.style.display = 'inline-block';
        this.refs.def.style.backgroundColor = '#f5f5f5';
        this.refs.def.style.color = '#aaaaaa';
        this.setState({text: '正在加载 请稍候...'});
        setTimeout(() => {
            this.props.refreshList(this.state.typ, limit);
            this.refs.img.style.display = 'none';
            this.refs.def.style.backgroundColor = '#fff';
            this.refs.def.style.color = '#285c9d';
            this.setState({text: '加载更多...'});
        }, 300)
    };

    componentWillMount() {
        /*        console.log(this.props);
         this.props.fetchList();*/
//10-20更新
        let type = this.props.match.params.uid;
        this.setState({typ: type});
        this.props.fetchList(type, limit);

    }

    componentDidMount() {
        let container = this.refs.container;
        let con = document.getElementsByTagName('body') || document.getElementsByTagName('element');
        upLoadMore(container, this.handleMore);
        downRefresh(container, this.props.refreshList)
    }

    render() {
        // console.log(this.props.lists.list);
        return (
            <div className="con">
                <p className="down"><img src={down} alt=""/>正在刷新</p>

                <ul className="list" ref="container">
                    {this.props.lists.list.length ? this.props.lists.list.map((item, index) => (
                        <li className="list-item" key={index}>
                            <div className="pic">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="text">
                                <p><span>{item.name

                                }</span></p>
                                <p>工龄：<span>{item.workingYears}</span></p>
                                <p>距离：<span>{item.distance}</span></p>
                            </div>
                            <div className="btn">
                                <p>{item.price}</p>
                                <Link to="/message">确认下单</Link>
                            </div>
                        </li>
                    )) : null}
                    <li className="btnMore">
                        <p className="default" ref="def">
                            <img src={more} ref="img"/>
                            <span onClick={this.handleMore}>{this.state.text}</span>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}