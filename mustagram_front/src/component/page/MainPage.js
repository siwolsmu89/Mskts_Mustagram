import React, {Component} from 'react';
import MyInfo from "../part/MyInfo/MyInfo";
import FollowNFollowee from "../part/FollowNFollowee/FollowNFollowee";
import ArticleScroll from "../part/ArticleScroll";

class MainPage extends Component {

    state = {
        myInfo:{}
    }

    getMyInfo() {
        // ajax 요청으로 DB에서 사용자 정보 가져오기
        fetch("/member/info.do?userId=siwolsmu")
            .then(response => response.json())
            .then(json => this.setState({myInfo:json}))
    }

    constructor() {
        super();
        this.getMyInfo();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("1234");
    }

    render(){
        return(
            <div className="page page-wrapper page-main-page">
                <div className="row">
                    <div className="col-7">
                        <ArticleScroll/>
                    </div>
                    <div className="col-5">
                        <MyInfo myInfo={this.state.myInfo}/>
                        <FollowNFollowee myInfo={this.state.myInfo}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage