import React, {Component} from "react";
import {Route} from "react-router-dom";
import LoginPage from "../component/page/LoginPage";

class FristPageRouter extends Component {
    render(){
        return(
            <div>
                FirstPageRoute
                <Route path='/LoginPage' component={LoginPage}/>
            </div>
        )
    }
}

export default FristPageRouter