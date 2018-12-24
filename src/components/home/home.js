import React, { Component } from 'react';
import Footer from "../../common/js/footer"
import {connect} from "react-redux"
import {get_one_action,drawing_action,getImg_action} from "../../action/actionCreator"
import Header from "../../common/js/header"
import MySwiper from "../../common/js/swiper"
import CateGroy from "./children/categroy"
import Hots from "./children/hots"
class Home extends Component {
  render() {
		let {data,imgData}=this.props
		let swiperList=this.props.imgData.data.filter((item,index)=>index<5)
    return (
      <div>
				<Header/>

				<MySwiper swiperList={swiperList}/>
				<CateGroy/>
				<Hots data={data} />
				<Footer/>
      </div>
    );
  }
	componentDidMount(){
		this.props.getData()
		this.props.getImg()
		if(JSON.parse(sessionStorage.getItem("user"))){
			this.props.drawing(true)
		}else{
			this.props.drawing(false)
		}
	}
}
const mapStateToProps=state=>({
		data:state.home.oneData,
		imgData:state.home.imgData
})
const mapDispatchToProps=(dispatch,props)=>({
		getData(){
			get_one_action(dispatch)
		},
		drawing(flag){
			dispatch(drawing_action(flag))
		},
		getImg(){
			getImg_action(dispatch)
		}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);