import React, {Component} from 'react';
import MyInfo from "../part/MyInfo/MyInfo";
import ArticleScroll from "../part/ArticleScroll";

class MainPage extends Component {
    render(){
        return(
            <div className="page page-wrapper page-main-page">
                <div className="row">
                    <div className="col-7">
                        <ArticleScroll/>
                    </div>
                    <div className="col-5">
                        <MyInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage