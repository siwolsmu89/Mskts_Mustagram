import React, {Component} from 'react';
import SnsLogin from "../part/SnsLogin";
import JoinMember from "../part/JoinMember";
import LinkLoginPage from "../part/LinkLoginPage";

class SignUpPage extends Component{
    render() {
        return(
            <div className="SignUp">
                <SnsLogin/>
                <JoinMember/>
                <LinkLoginPage/>
            </div>
        )
    }
}

export default SignUpPage