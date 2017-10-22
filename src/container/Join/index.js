import  React,{Component} from 'react'
import imgJoin from '../../images/join.jpg'
import './index.less'

export  default class Join extends Component{

       render(){
          return(
            <div className="join">
                <img src={imgJoin} alt=""/>
            </div>
          )
       }
}