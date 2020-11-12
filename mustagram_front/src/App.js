import React, {Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import FristPageRouter from "./route/FristPageRouter";

class App extends Component {
  render(){
    return (
        <BrowserRouter>
            <FristPageRouter/>
        </BrowserRouter>
    )
  }
}

export default App
