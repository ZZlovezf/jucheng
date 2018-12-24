import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom"
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import List_loding from "../child/list_loder";
class list_show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data1: {
                list: [],
                noflage:false
            }
        }
    }
    render() {
        let { data,detail,flag} = this.props;
        let {noflage} = this.state;
        let shuju = {}
        if (!data) {
            shuju = this.state.data1
        } else {
            shuju = data
        }
        // let shuju = data ? data.list : data1.list
        return (
            <Fragment>
            <ul id="list_show" ref="list_nav" >
                {
                    shuju.list.schedular_name?<List_loding/>:shuju.list.map((item, index) => {
                        return <li key={index}>
                            <Link to="/listdetail" onClick={detail.bind(this,index)}>
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
               {shuju.list.schedular_name?<div>未找到相应内容</div>:""} 
                
            </ul>
            
           {flag?<List_loding/>:""}
           
           {noflage?<div className="none"><span>没有更多了</span></div>:""}
            
            </Fragment>
        )
    }
    componentDidMount(){
        if(this.props.data){
            if(this.props.data.total<4){
                this.setState({
                    noflage:true
                })
            }else{
                this.setState({
                    noflage:false
                })
            }
        }
    }
}


export default list_show