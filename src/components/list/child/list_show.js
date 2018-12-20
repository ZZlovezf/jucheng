import React, { Component } from "react";
import { Link } from "react-router-dom"
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import list from "../list";

class list_show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            data1: {
                list: [
                    { c_name: "正在加载" }
                ]
            }
        }
    }
    render() {
        let { data, data1 } = this.props;
        let shuju = {}
        if (!data) {
            shuju = this.state.data1

        } else {
            shuju = data
        }
        // let shuju = data ? data.list : data1.list
        return (
            <ul id="list_show" ref="list_nav" >

                {
                    shuju.list.map((item, index) => {
                        return <li key={index}>
                            <Link to="/listdetail">
                                <div id="img-box"><img src={" http://image.juooo.com" + item.pic} /></div>
                                <div id="detail-box">
                                    <p>{item.schedular_name}</p>
                                    <p>{item.show_time}</p>
                                    <p>{item.v_name}</p>
                                    <p><span>¥</span>
                                        {item.min_price}
                                        <span>-</span>
                                        {item.max_price}</p>
                                </div>
                            </Link>
                        </li>

                    })
                }
            </ul>
        )
    }
}

export default list_show