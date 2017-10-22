import  React, {Component} from 'react'
import './index.less'
import ReactSwipe from 'react-swipe'

export  default class Swiper extends Component {

    constructor() {
        super();
        this.state = {
            index: 0,
            sliders: []
        }
    }

    componentsWillMount() {
        console.log(this.props.sliders);
        this.setState({
            sliders: this.props.sliders
        })
    }

    render() {
        let options = {
            continuous: true,
            speed: 400,
            auto: 2000,
            disableScroll: true,
            //每轮播一次会调用此回调方法并传入最新的索引
            callback: (index) => {
                this.setState({index});
            }
        };

        return (
            <div className="swiper">
                <ReactSwipe className="carousel" swipeOptions={options}>
                    {
                        this.props.sliders.map((item, index) => {
                            return <div key={index}><img src={item}/></div>
                        })
                    }
                </ReactSwipe>
                <div className="dots">
                    {
                        this.props.sliders.map((item, index) => {
                            return <span className={
                                this.state.index == index ? 'dot active' : 'dot'
                            } key={index}></span>
                        })
                    }
                </div>
            </div>
        )
    }
}


