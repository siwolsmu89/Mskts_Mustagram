import React, {Component} from "react";
import {Route} from "react-router-dom";
import LoginPage from "../component/page/LoginPage";
import SignUpPage from "../component/page/SignUpPage";

class MemberPageRouter extends Component {
    render(){
        return(
            <div>
                <Route path='/Login' component={LoginPage}/>
                <Route path='/SignUp' component={SignUpPage}/>
            </div>
        )
    }
}

export default MemberPageRouter