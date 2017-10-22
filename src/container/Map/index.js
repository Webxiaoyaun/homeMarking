import  React, {Component} from 'react'
import './index.less'

export  default class MapApp extends Component {

    componentDidMount() {
        // console.log(this.refs.m.id);
        // console.log(this.refs.r.id);
        // 百度地图API功能
        let map = new BMap.Map(this.refs.m.id);            // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        let local = new BMap.LocalSearch(map, {
            renderOptions: {map: map, panel: this.refs.r.id}
        });
        local.search("珠峰培训");
    }

    render() {

        let options = {
            height: '200px',
            width: '100%',
            border:'1px solid #cecece',
            borderRadius: '5px',
        };
        let options2 = {
            marginTop:'5px',
            width: '100%',
            overflow:'hidden',
            overflowY:'auto',
            borderRadius: '5px',
            border:'1px solid #cecece'
        };

        return (
                <div className="map">
                    <input className="map-seek" type="text" placeholder="请输入小区或者大厦名称"/>
                    <div style={options} ref="m" id="l-map"></div>
                    <div style={options2} ref="r" id="r-result"></div>
                </div>
        )
    }
};
