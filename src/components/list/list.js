
import React, { Component } from 'react';

import { connect } from "react-redux";


import Footer from "../../common/js/footer";
import List_nav from "./child/list_nav1";
import List_show from "./child/list_show";

import { GG_showdata } from "../../action/actionCreator"
import "./style/list.css";
const qs = require("querystring");



class List extends Component {
  // componenetWillUpdate(){
  //   let url = this.changeprops()
  //   let {cid,caid} = url;
  //   this.props.getDate(cid,caid)
  // }
  componentDidMount() {
    let { cid, caid } = this.state.url
    this.props.getDate(cid, caid)
  }
  constructor(props) {
    super(props)
    let url = this.changeprops()
    this.state = {
      url
    }
  }
  render() {
    let { data } = this.props.listdata
    return (
      <div id="list">
        <List_nav Changeprops={this.handleGet.bind(this)} />
        <List_show data={data} />
        <Footer />
      </div>
    );
  }
  changeprops() {
    let query = qs.parse(this.props.location.search.slice(1))
    return query
  }
  handleGet() {
    
    let url = this.changeprops()
    
    let { cid, caid } = url;
    this.props.getDate(cid, caid)

  }

}
const mapStateToProps = (state) => ({
  listdata: state.list.showdata
})
const mapDispatchToProps = (dispatch) => ({

  getDate(cid, caid = 0, page = 1) {
    console.log(cid,caid,page)
    let obj = {
      city_id: cid,
      category: caid,
      keywords: "null",
      activity_id: 0,
      sort_type: 0,
      page: page
    }
    GG_showdata(dispatch, obj)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);