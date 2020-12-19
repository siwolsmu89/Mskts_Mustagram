import React, {Component} from 'react';
import basicImage from "../../resources/profile/react-profile.png";

class Followee extends Component {

    state = {
        friendInfo: []
    }

    getMyFollowees() {
        var myInfo = this.props.myInfo;
        var id = myInfo.id;
        console.log("followee userId", id);
        fetch("/member/friend.do?type=e&userId=" + id)
            .then(response => response.json())
            .then(json => this.setState({friendInfo: json}));
    }

    componentDidMount() {
        this.getMyFollowees();
    }
    render() {
        var isShow = this.props.show;
        console.log(isShow);

        const {friendInfo} = this.state;
        const friendList = friendInfo.map(
            (friend, i) => (
                <li key={i}>
                    <span>{i}</span>
                    <img src={friend.image ? friend.image : basicImage} alt={"profile image of " + friend.name} />
                    <span>{friend.id}</span>
                </li>
            )
        );
        console.log({friendInfo});
        return (
            <div className={isShow ? 'show' : ''}>
                <ul>
                    {friendList.length > 0 ? friendList : "No Followees Found"}
                </ul>
            </div>
        );
    }
}
export default Followee