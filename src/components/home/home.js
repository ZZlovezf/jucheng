import React, { Component } from 'react';
import Footer from "../../common/js/footer"
import {connect} from "react-redux"
import {get_one_action} from "../../action/actionCreator"
import Header from "../../common/js/header"
class Home extends Component {
  render() {
		console.log(this.props.data)
    return (
      <div>
				<Header/>
				1111郭斌
				
				<Footer/>
      </div>
    );
  }
	componentDidMount(){
		this.props.getData()
	}
}
const mapStateToProps=state=>({
		data:state.home.oneData
})
const mapDispatchToProps=(dispatch,props)=>({
		getData(){
			get_one_action(dispatch)
		}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);