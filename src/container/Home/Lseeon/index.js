import  React, {Component} from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'

//获取图片
import tv from '../../../images/icon1.png'
 import jiadian from '../../../images/icon2.png'
 import weishen from '../../../images/icon3.png'
 import ayi from '../../../images/icon4.png'
 import kaisuo from '../../../images/icon5.png'
 import sutong from '../../../images/icon6.png'
 import shuidian from '../../../images/icon8.png'
 import more from '../../../images/icon7.png'
 let imgs = {0:tv, 1:jiadian, 2:weishen, 3:ayi, 4:kaisuo, 5:sutong, 6:shuidian, 7:more};


export  default class Lesson extends Component {
    render() {
        // console.log(this.props.lessons);
        return (
            this.props.lessons.length>0 ?
                <div className="menu">
                    {
                        this.props.lessons.map((item, index) => {
                            return <NavLink to={`/list/${item.id}`} key={item.id}>
                                <img src={imgs[index]} alt=""/>
                                <p>{item.text}</p>
                            </NavLink>
                        })
                    }
                </div> : null
        )
    }
}