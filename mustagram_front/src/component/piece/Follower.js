import React, {Component} from 'react';

class Follower extends Component {

    render() {
        var isShow = this.props.show;
        console.log(isShow)
        return (
            <div className={isShow ? 'show' : ''}>
                Follow ER
            </div>
        );
    }
}

export default Follower