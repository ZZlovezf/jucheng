import React, { Component } from "react";
import { connect } from "react-redux";
import { GG_getcity } from "../../../action/actionCreator"
import "../style/city.css"
const qs = require("querystring")

class selectcity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hot: [
                { name: "全国", "cid": -1 },
                { name: "深圳", "cid": -1 },
                { name: "广州", "cid": 3 },
                { name: "北京", "cid": 5 },
                { name: "上海", "cid": 4 }
            ],
            dianji: { name: "全国", "cid": -1 },
            A: "深圳"
        }
    }
    render() {
        let { hot, dianji } = this.state;
        let { getcity, getncity } = this.props
        return (
            <div id="list_city">
                <header>
                    <span onClick={this.hanlegoback.bind(this)}> 《 </span>
                    <div>切换城市</div>
                </header>
                <section>
                    <p>当前城市</p>
                    <div><a className="detail_city" onClick={getcity.bind(this, dianji)}>{dianji.name}</a></div>
                    <p>定位城市</p>
                    <div><a href="##" className="detail_city">暂无定位</a></div>
                    <p>热门城市</p>
                    <div>
                        {
                            hot.map((item, index) => {
                                return <a  key={index}
                                    onClick={this.hanlegetncit.bind(this, index)}
                                    className="detail_city">{item.name}</a>
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
    hanlegoback() {
        this.props.history.goBack()
    }
    hanlegetncit(index) {
        let _this = this;
        this.setState({ dianji: this.state.hot[index] },()=>{
            let arr = this.state.dianji;
            _this.props.getncity(arr)
            _this.props.history.push("/list")
        })
    }
    // hanlegopush(cid) {
    //     // { pathname: "/list", query: { "cid": cid } }

    //     this.props.history.push("/list",{"cid":cid})
    // }
}
const mapStateToProps = (state) => ({
    gg_city: state.list.gg_city
})
const mapDispatchToProps = (dispatch) => ({
    getcity(arr) {
        GG_getcity(dispatch, arr)
        this.props.history.push("/list")
    },
    getncity(arr) {
        GG_getcity(dispatch, arr)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(selectcity)