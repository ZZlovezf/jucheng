import React, { Component } from "react";
import {NavLink} from "react-router-dom"
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import list from "../list";

class list_show extends Component {
    constructor() {       
        super()
        this.state = {
            nav: ["全部", "演唱会", "音乐会", "话剧歌剧", "儿子亲子", "音乐剧", "舞蹈芭蕾", "戏曲综艺", "展览"]
        }
    }
    render() {
        console.log(this.props.data)
        let { nav } = this.state
        return (
            <ul id="list_show" ref="list_nav" >
               show
            </ul>

        )
    }
    componentDidMount() {
        
    }
    
}

export default list_show