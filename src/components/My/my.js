import React, { Component } from 'react';
import Footer from "../../common/js/footer"
import MyCon from "./children/myCon"
class My extends Component {
  render() {
    return (
      <div>
				<MyCon/>
				<Footer/>
      </div>
    );
  }
}

export default My;