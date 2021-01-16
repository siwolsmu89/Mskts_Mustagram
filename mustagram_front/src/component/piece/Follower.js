import React, {Component} from 'react';
import basicImage from "../../resources/profile/react-profile.png";
import "../../css/piece/Follower.css";

class Follower extends Component {

    state = {
        friendInfo :[],
        message: {}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.myInfo.id !== this.props.myInfo.id) {
            var id = this.props.myInfo.id;
            this.getMyFollowers(id);
        }
        this.render();
    }

    getMyFollowers(id) {
        fetch("/member/friend.do?type=r&userId="+id)
            .then(response => response.json())
            .then(json => this.setState({friendInfo:json}));
    }

    setFriendList() {
        var friendList = this.state.friendInfo;
        var friendUl = [];

        for (var i=0; i<friendList.length; i++) {
            var friend = friendList[i];
            var unfollowParams = {
                userId : this.props.myInfo.id,
                friendId : friend.id
            };
            let friendtag = (
                <li key={i}>
                    <div className="row">
                        <div className="col-3">
                            <img className="follower-img" src={friend.image ? friend.image : basicImage} alt={'profile image of ' + friend.name} />
                        </div>
                        <div className="col-3">
                            <span>{friend.id}</span>
                        </div>
                        <div className="col-3">
                            <button type="button" onClick={ this.unfollow.bind(this, unfollowParams) }>Unfollow</button>
                        </div>
                    </div>
                </li>
            );

            friendUl.push(friendtag);
        }

        if (friendList.length === 0) {
            let friendtag = (
                <li key="0"> You are following no one  </li>
            );
            friendUl.push(friendtag);
        }

        return friendUl;
    }

    unfollow(unfollowParams) {
        fetch("/member/unfollow.do?userId="+unfollowParams.userId+"&friendId="+unfollowParams.friendId)
            .then(response => response.json())
            .then(json => this.setState({message:json}));

        console.debug(this.state.message);
        console.info("unfollow 1",unfollowParams.userId);
        console.info("unfollow 2",unfollowParams.friendId);
    }

    render() {
        var isShow = this.props.show;

        return (
            <div className={isShow ? 'show' : 'hide'}>
                <ul id="follower-ul"> {this.setFriendList()} </ul>
            </div>
        );
    }
}

export default Follower