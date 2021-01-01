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
        fetch("/member/friend.do?type=e&userId=" + id)
            .then(response => response.json())
            .then(json => this.setState({friendInfo: json}));
    }

    componentDidMount() {
        var myInfo = this.props.myInfo;
        this.getMyFollowees(myInfo.id);
    }
    render() {
        var isShow = this.props.show;
        console.log(isShow);

        var friendList = this.state.friendInfo;
        for (var i=0; i<friendList.length; i++) {
            var friend = friendList[i];
            var friendtag = <span>1</span>;
//            var friendtag = "<li> <span>i</span> <img src={friend.image ? friend.image : basicImage} alt={'profile image of ' + friend.name} /> <span>{friend.id}</span> </li>";
            document.querySelector("#followee-ul").append(friendtag);
            console.log("ffffffff");
        }
        console.log(this.state.friendInfo);
        return (
            <div className={isShow ? 'show' : ''}>
                <ul id="followee-ul">
                </ul>
            </div>
        );
    }
}
export default Followee