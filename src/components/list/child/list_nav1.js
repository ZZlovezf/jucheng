import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import { connect } from "react-redux"
import { GG_getdatatype } from "../../../action/actionCreator"
class Home_nav extends Component {
    constructor(){
        super()
        this.state = {
            list:[
                {type:"全部",typeid:""},
                {type:"演唱会",typeid:"35"},
                {type:"音乐会",typeid:"36"},
                {type:"话剧歌剧",typeid:"37"},
                {type:"儿子亲子",typeid:"38"},
                {type:"音乐剧",typeid:"79"},
                {type:"舞蹈芭蕾",typeid:"86"},
                {type:"戏曲综艺",typeid:"91"},
                {type:"展览",typeid:"99"}
            ]
        }
    }
    render() {
        let {Changeprop,cid}  = this.props;
        let {list} = this.state;
        return (
            <div id="list_nav">
                <ul ref="list_nav" >
                {
                    list.map((item,index)=>{
                        return <li key={index}><NavLink to={"/list?cid="+cid.cid+"&caid="+item.typeid} onClick={Changeprop.bind(this)} >{item.type}</NavLink></li>
                    })
                }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    Datatype: state.list.gg_getdatatype
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Home_nav)