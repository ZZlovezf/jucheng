import React, { Component,Fragment } from "react";

class list_sort extends Component {
    render() {
        let {clinsort,Sflag,onclicheck} = this.props;
        return (
            <div className="list_sort" onClick={clinsort.bind(this)}>
                <div className="mengban">
                    <ul className="list">
                      <li onClick={onclicheck.bind(this,1)}>推荐排序{Sflag?<span className="fa fa-check"></span>:""}</li>
                      <li onClick={onclicheck.bind(this,2)}>时间排序{Sflag?"":<span className="fa fa-check"></span>}</li>
                    </ul>
                </div>
            </div>
        )
    }
 
}


export default list_sort