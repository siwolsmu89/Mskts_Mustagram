import React, {Component} from "react";

class JoinMember extends Component{
    render() {
        return(
            <div>
                <div class="login_field">
                    아이디 : <input type="text" name="id"/> <br/>
                    비밀번호 : <input type="text" name="password"/> <br/>
                    비밀번호 확인 : <input type="text" name="password"/> <br/>
                </div>
                <div class="submit_button">
                    <button>
                        가입
                    </button>
                </div>
                <div class="description">
                    가입하면 mustagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
                </div>
            </div>
        )
    }
}

export default JoinMember