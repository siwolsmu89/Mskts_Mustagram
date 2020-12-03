import React, {Component} from "react";
import {Route} from "react-router-dom";
import MainPage from "../component/page/MainPage";

class MainPageRoute extends Component {
    render(){
        return(
            <div>
                <Route path='/MainPage' component={MainPage}/>
            </div>
        )
    }
}

export default MainPageRoute