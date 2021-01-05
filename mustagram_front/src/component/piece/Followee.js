import React, {Component} from 'react';
import basicImage from "../../resources/profile/react-profile.png";

class Followee extends Component {

    state = {
        friendInfo: []
    }

    getMyFollowees(id) {
        console.log("followee userId", id);
        // TODO
        // 문제 1 : id 못 받아옴
        // 문제 2 : .json()으로 받으면 오류 남
        fetch("/member/friend.do?type=e&userId=siwolsmu" )
            .then(response => response.json())
            .then(json => this.setState({friendInfo: json}));

    }

    setFriendList() {
        var friendList = this.state.friendInfo;
        var friendUl = document.querySelector("#followee-ul");
        console.log("set List");

        friendUl.innerHTML = '';

        for (var i=0; i<friendList.length; i++) {
            console.log("appned");
            var friend = friendList[i];
            let friendtag = (<li> <span>{i}</span> <img src={friend.image ? friend.image : basicImage} alt={'profile image of ' + friend.name} /> <span>{friend.id}</span> </li>);
            console.log(friendtag);
            friendUl.append(friendtag);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setFriendList();
        if (prevProps.myInfo.id != this.props.myInfo.id) {
            var id = this.props.myInfo.id;
            this.getMyFollowees(id);
            console.log("followee");
        }
    }

    render() {
        var isShow = this.props.show;

        return (
            <div className={isShow ? 'show' : ''}>
                <ul id="followee-ul">
                </ul>
            </div>
        );
    }
}
export default Followee