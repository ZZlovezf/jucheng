import React,{Component} from "react";
class loading extends Component{
    render(){
        return(
            <div className="loading">
            <p><i className="fa fa-spinner fa-spin"></i>正在加载</p>
            </div>
        )
    }
}

export default loading