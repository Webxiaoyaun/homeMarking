import React,{Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import '../style/common.less';
import Home from './Home/index';
import Register from './Register/index';
import Login from "./Login/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import OrderList from "./OrderList/index";
import List from "../container/List/index";
import Message from "../container/Message/index";
import Balance from "./Balance/index";
import Profile from "./Profile/index";
import FeedBack from "./FeedBack/index";
import Wallet from "./Wallet/index";
import Protected from '../components/Protected/index';
import MapApp from "./Map/index";
import Join from "./Join/index";
//引入store

export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/list/:uid" component={List}/>
                        <Route path="/message" component={Message}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Protected path="/order" component={OrderList}/>
                        <Route path="/balance" component={Balance}/>
                        <Route path="/feedback" component={FeedBack}/>
                        <Protected path="/profile" component={Profile}/>
                        <Route path="/wallet" component={Wallet}/>
                        <Route path="/map" component={MapApp}/>
                        <Route path="/join" component={Join}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
