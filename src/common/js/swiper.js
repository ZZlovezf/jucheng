import React, { Component } from 'react';
import Swiper from 'swiper'
import {NavLink} from "react-router-dom"
class MySwiper extends Component {
	
  render() {
	  let {swiperList}=this.props
		console.log(swiperList)
		return (
			<div className="Swiper">
				<div className="swiper-container" ref="swiper-container">
				  <div className="swiper-wrapper">
				  { swiperList.map((item,index)=>{
					  return <div className="swiper-slide" key={index}><img src={"http://image.juooo.com"+item.touch_image_url
}/></div>
					})
					
					}
				  </div>
				</div>
			</div>
		);
  }
	componentDidUpdate(){
		if(this.props.swiperList.length==5){
			
				this.swiper=new Swiper ('.swiper-container', {
							direction: 'horizontal', 
							loop: true,
							pagination: {
							el: '.swiper-pagination',
							},
							autoplay: {
								delay: 3000,
								disableOnInteraction:false,
								}
					})
			
		}
	}
}

export default MySwiper;