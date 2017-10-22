import React, {Component} from 'react';
import './index.less'
import {get} from '../../../utils/index'
import Swiper from "./Swiper/index";
import {fetchSliders} from 'react-redux'
import actions from '../../store/actions/home'
import {connect} from 'react-redux'

//引入图片
import Lesson from "./Lseeon/index";
import Login from "./Login/index";
import CallBack from "./CallBack/index";

@connect(
    state => state.home,
    actions
)
export default class Home extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.fetchSliders();
        this.props.fetchLessons();
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.sliders);
        // console.log(this.props.lessons);
        return (
            <div className="home">
                {
                    this.props.sliders.length > 0 ?
                        <Swiper sliders={this.props.sliders}/> :
                        null
                }
                {
                    this.props.lessons.length > 0 ?
                        <Lesson lessons={this.props.lessons}/>
                        : '数据加载中，请稍后~'
                }
                <Login/>
                <CallBack/>
            </div>
        )
    }
}
