import React, {Component} from 'react';
import basicImage from "../../resources/profile/react-profile.png";
import "../../css/piece/Follower.css";

class Follower extends Component {

    state = {
        friendInfo :[]
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.myInfo.id !== this.props.myInfo.id) {
            var id = this.props.myInfo.id;
            this.getMyFollowers(id);
        }
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
                            <button type="button">Unfollow</button>
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