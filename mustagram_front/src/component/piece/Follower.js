import React, {Component} from 'react';
import basicImage from "../../resources/profile/react-profile.png";

class Follower extends Component {

    state = {
        friendInfo :[]
    }

    getMyFollowers(id) {
        fetch("/member/friend.do?type=r&userId="+id)
            .then(response => response.json())
            .then(json => this.setState({friendInfo:json}));
    }

    componentDidMount() {
        var id = this.props.myInfo.id;
        this.getMyFollowers(id);
    }

    render() {
        var isShow = this.props.show;
        console.log(isShow);

        const { friendInfo } = this.state;
        const friendList = friendInfo.map(
            (friend, i) => (
            <li key={i}>
                <span>{i}</span>
                <img src={friend.image ? friend.image : basicImage} alt={"profile image of " + friend.name} />
                <span>{friend.id}</span>
            </li>
            )
        );
        return (
            <div className={isShow ? 'show' : ''}>
                {friendList.length > 0 ? friendList : "No Followers Found"}
            </div>
        );
    }
}

export default Follower