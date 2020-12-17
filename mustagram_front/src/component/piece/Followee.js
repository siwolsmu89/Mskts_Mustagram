import React, {Component} from 'react';

class Followee extends Component {

    render() {
        var isShow = this.props.show;
        return (
            <div className={isShow ? 'show' : ''}>
                Follow EE
            </div>
        );
    }
}

export default Followee