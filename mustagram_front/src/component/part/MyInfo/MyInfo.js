import React, {Component} from 'react';
import basicImage from '../../../resources/profile/react-profile.png';
import './MyInfo.css'

class MyInfo extends Component {

    render() {
        var myInfo = this.props.myInfo;
        var imageSrc = myInfo.image ? myInfo.image : basicImage;
        var imageAlt = myInfo.image ? "Image fileName: " + myInfo.image + " - profile image of user " + myInfo.nickname : "Basic Profile";
        return (
            <div className="part part-wrapper part-my-info">
                <div className="row">
                    <div className="col-3 profile-image">
                        <img src={imageSrc} alt={imageAlt}/>
                    </div>
                    <div className="col-9 profile-id-nickname">
                        <h3 className="profile-id">{myInfo.id}</h3>
                        <p className="profile-nickname">{myInfo.nickname}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyInfo