import React, { Component } from "react";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import Swiper from "swiper";



class Home_nav extends Component {
    constructor() {
        super()
        this.state = {
            nav: ["全部", "演唱会", "音乐会", "话剧歌剧", "儿子亲子", "音乐剧", "舞蹈芭蕾", "戏曲综艺", "展览"]
        }
    }
    render() {
        let { nav } = this.state
        return (
            <div className="swiper-container list_nav" ref="list_nav">
                <div className="swiper-wrapper">
                    {
                        nav.map((item, index) => {
                            return <div className="swiper-slide" index={index} key={index}>{item}</div>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        new Swiper(this.refs.list_nav, {
            freeMode:true,
            slidesPerView: "auto",
            slideToClickedSlide: true,
            on:{
                click(){
                    var el = this.slides[this.clickedIndex];
                    if(this.clickedIndex == this.slides[this.clickedIndex].index){
                        this.slides[this.clickedIndex].className = "swiper-slide acitve"
                    }
                        
                   
                    
                   
                    console.log(this.slides[this.clickedIndex])
                }
            }
        })
        // new Swiper(this.refs.list_nav,{
        //     freeMode:true,
        //     slidesPerView:'auto',
        //     on:{
        //           click(){  
        //                vm.curIndex = this.clickedIndex;
        //               //单击 当前导航条到中心位置
        //                this.setTransition(200);
        //                 var el = this.slides[this.clickedIndex];  //当前单击 元素
        //                 var elpos = el.offsetLeft + el.clientWidth/2; //当前单击 元素中心位置
        //                  var swiperContainerWidth = this.wrapperEl.clientWidth; //容器的宽度
        //                  var maxDis = this.maxTranslate();//最大的滚动距离
        //                  var maxPos = -maxDis + swiperContainerWidth/2; //最大的中心位置
        //                  if(elpos < swiperContainerWidth/2){
        //                      this.setTranslate(0)
        //                  }
        //                  else if(elpos>maxPos){
        //                     this.setTranslate(maxDis)
        //                  }
        //                  else{
        //                    this.setTranslate(swiperContainerWidth/2-elpos)
        //                  }
        //                     if(vm.curIndex===0){	//很重要	 
        //                      vm.$router.push({'name':'List'})
        //                  }else{
        //                      vm.$router.push('/home/index/'+vm.titles[vm.curIndex].type)
        //                  }
                 
        //       }
        //     }
        // })
    }
}

export default Home_nav