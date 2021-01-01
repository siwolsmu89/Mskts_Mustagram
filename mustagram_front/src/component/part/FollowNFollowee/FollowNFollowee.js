import React, {Component} from 'react';
import Follower from '../../piece/Follower';
import Followee from '../../piece/Followee';
import './FollowNFollowee.css'

class FollowNFollowee extends Component {


    /*getFollow(type) {
        // ajax 요청으로 DB에서 팔로워 또는 팔로위 가져오기
        var id = this.props.myInfo.id;
        fetch("/member/friend.do?type="+type+"&userId="+id)
            .then(response => response.json())
            .then(json => this.setState({friendInfo:json}));
    }*/

    getFollow(type) {
        this.setState({friendType: type});
    }

    constructor(props) {
        super(props);
        this.state = {
            friendType : "",
            myInfo: props.myInfo
        }
    }

    render() {
        var myInfo = this.state.myInfo;
        var myNickname = myInfo.nickname;
        return (
            <div className="follow-n-followee">
                <div className="follow-n-followee-tab row">
                    <div className="col-6" onClick={() => this.getFollow('er')}>
                        <h3>
                            {myNickname}'s Follwers
                        </h3>
                    </div>
                    <div className="col-6" onClick={() => this.getFollow('ee')}>
                        <h3>
                            {myNickname}'s Follwees
                        </h3>
                    </div>
                </div>
                <div className="friend-content">
                    <Follower myInfo={myInfo} show={this.state.friendType.indexOf('er') !== -1} />
                    <Followee myInfo={myInfo} show={this.state.friendType.indexOf('ee') !== -1} />
                </div>
            </div>
        );
    }
}

export default FollowNFollowee