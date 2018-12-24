
import React, { Component, Fragment } from 'react';
// import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import { connect } from "react-redux";

import Footer from "../../common/js/footer";
import List_header from "./child/list_header";
import List_nav from "./child/list_nav1";
import List_show from "./child/list_show";
import List_sort from "./child/list_sort"
import "./style/list.css";
import BScroll from "better-scroll";
import {
  GG_showdata,
  GG_getNewDate,
  GG_getSOrtData,
}
  from "../../action/actionCreator";
const qs = require("querystring");

class List extends Component {
  constructor(props) {
    super(props)
    let url = this.changeprops()
    this.state = {
      sortflag: true,
      obj: {
        city_id: -1,
        category: 0,
        keywords: null,
        activity_id: 0,
        sort_type: 0,
        page: 1
      },
      flag: false,
      Sflag: true
    }
    // console.log(this.state.sortflag)
  }
  render() {
    let { flag, sortflag } = this.state;
    let { listdata, city } = this.props;
    return (
      <Fragment>
        {flag ? <div className="falseheader">
          <List_header cid={city} clinsort={this.hanlesort.bind(this)} />
          <List_nav cid={city} Changeprop={this.handleGet.bind(this)} />
        </div> : ""}
        <div id="list" className="wrapper" ref="wrapper">
          <div className="content">
            {flag ? "" : <Fragment><List_header cid={city} clinsort={this.hanlesort.bind(this)} />
              <List_nav cid={city} Changeprop={this.handleGet.bind(this)} />
            </Fragment>}
            <List_show data={listdata.data} flag={flag} detail={this.handledetail} />
          </div>
          <Footer />
        </div>
        {sortflag ? "" : <List_sort
          clinsort={this.hanlesort.bind(this)}
          onclicheck={this.hanlesortflage.bind(this)}
          Sflag={this.state.Sflag} />}
      </Fragment>
    );
  }
  componentDidMount() {
    this.DidMountDate()
    this.scorll = new BScroll(this.refs.wrapper, {
      click: true,
      pullUpLoad: true,
      probeType: 2
    })
    this.scorll.on("pullingUp", () => {
      let obj1 = JSON.parse(JSON.stringify(this.state.obj));
      this.setState({
        obj: {
          city_id: -1,
          category: 0,
          keywords: null,
          activity_id: 0,
          sort_type: 0,
          page: ++this.state.obj.page
        }
      })
      obj1.page++;
      this.props.getnewDate(obj1)
    })
    this.scorll.on("scroll", (offset) => {
      if (offset.y <= -162.97) {
        this.setState({
          flag: true
        })
      } else {
        this.setState({
          flag: false
        })
      }
    })
  }
  hanlesortflage(num) {
    if (num == 1) {
      this.setState({
        Sflag: true
      })
    } else {
      this.setState({
        Sflag: false
      })
    }
    this.handletruesort(num)
  }
  handletruesort(num) {
    let oldarr = [...this.props.listdata.data.list]
    let ooldarr = [...this.props.listdata.data.list]
    console.log(oldarr)
    if (num == 2) {
      oldarr.sort(function (a, b) {
        return b.city_id - a.city_id;
      })
      // console.log(newarr)
      this.props.getnewsortdate(oldarr)
    } else if (num == 1) {
      // console.log(oldarr)
      this.DidMountDate()
    }
  }
  hanlesort() {
    // let newflage = !this.state.sortflag
    this.setState((pre) => {
      console.log(pre.sortflag)
      return { sortflag: !pre.sortflag }
    })
    // console.log(this.state.sortflag)
  }
  componentDidUpdate() {
    this.scorll.refresh();
    this.scorll.finishPullUp();
  }
  handledetail() {
    this.DidMountDate()
  }
  // 导航点击获取数据
  handleGet() {
    this.DidMountDate()
  }
  // 初始化数据
  DidMountDate() {
    let url = this.changeprops();
    let obj = {
      city_id: -1,
      category: 0,
      keywords: "",
      activity_id: 0,
      sort_type: 0,
      page: 1
    }
    if (url.caid) {
      let { cid, caid } = url
      obj.city_id = cid;
      obj.category = caid;
      this.props.getDate(obj)
    } else if (url.k) {
      let { cid, caid = 0, k } = url
      obj.city_id = cid;
      obj.category = caid;
      obj.keywords = k;
      this.props.getDate(obj)
    } else {
      let { cid } = url;
      obj.city_id = cid;
      obj.category = 0;
      obj.keywords = "";
      this.props.getDate(obj)
    }
  }
  changeprops() {
    let query = qs.parse(this.props.location.search.slice(1))
    return query
  }
  // 导航获取数据

}
const mapStateToProps = (state) => ({
  listdata: state.list.showdata,
  cid: state.list.gg_city,
  caid: state.list.gg_getdatatype,
  city: state.list.gg_city
})
const mapDispatchToProps = (dispatch) => ({
  getDate(obj) {
    GG_showdata(dispatch, obj)
  },
  getnewDate(obj) {
    GG_getNewDate(dispatch, obj)
  },
  getnewsortdate(arr) {
    GG_getSOrtData(dispatch, arr)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);