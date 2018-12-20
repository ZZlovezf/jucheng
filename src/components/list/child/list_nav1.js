import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";

class Home_nav extends Component {
    constructor() {
        super()
        this.state = {
            nav: ["全部", "演唱会", "音乐会", "话剧歌剧", "儿子亲子", "音乐剧", "舞蹈芭蕾", "戏曲综艺", "展览"]
        }
    }
    render() {
        return (
            <div id="list_nav">
                <ul ref="list_nav" >
                    <li><NavLink to="/list?cid=-1" onClick={this.hanlechange.bind(this)} >全部</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=35" onClick={this.hanlechange.bind(this)}>演唱会</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=36" onClick={this.hanlechange.bind(this)}>音乐会</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=37" onClick={this.hanlechange.bind(this)}>话剧歌剧</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=38" onClick={this.hanlechange.bind(this)}>儿子亲子</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=79" onClick={this.hanlechange.bind(this)}>音乐剧</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=86" onClick={this.hanlechange.bind(this)}>舞蹈芭蕾</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=91" onClick={this.hanlechange.bind(this)}>戏曲综艺</NavLink></li>
                    <li><NavLink to="/list?cid=-1&caid=99" onClick={this.hanlechange.bind(this)}>展览</NavLink></li>
                </ul>
            </div>
        )
    }
    hanlechange(){
       this.props.Changeprops()
    }
}

export default Home_nav