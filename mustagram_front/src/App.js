import React, {Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import MemberPageRouter from "./route/MemberPageRouter";

class App extends Component {
  render(){
    return (
        <BrowserRouter>
            <MemberPageRouter/>
        </BrowserRouter>
    )
  }
}

export default App
