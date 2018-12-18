import React, { Component } from 'react';
import Footer from "../../common/js/footer"
import {connect} from "react-redux"
class Home extends Component {
  render() {
		console.log(this.props.data)
    return (
      <div>
				home
				<Footer/>
      </div>
    );
  }
	
}
const mapStateToProps=state=>({
		data:state.home.oneData
})
const mapDispatchToProps=(dispatch,props)=>({
	
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);