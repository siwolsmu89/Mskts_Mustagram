import React, {Component} from "react";
import InputId from "../piece/InputBox/InputId"
class JoinMember extends Component{
    memberInsert = () => {
        let id = document.getElementById("id").value;
        let password = document.getElementById("password").value;
        let name = document.getElementById("name").value;
        let telephone = document.getElementById("telephone").value;
        let email = document.getElementById("email").value;

        let memberData = {
            id : id,
            password : password,
            name : name,
            telephone : telephone,
            email : email
        }

        fetch('/member/register.do',{
            method : 'POST',
            body : JSON.stringify(memberData),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(
            res => res.text()
        ).then(
            res => console.log('response data : ',res)
        );
    }
    render() {
        return(
            <div>
                <div class="login_field">
                    <InputId placeholder={'사용자 아이디'}/> <br/>
                    비밀번호 : <input type="text" name="password" id="password"/> <br/>
                    비밀번호 확인 : <input type="text" name="password" id="password"/> <br/>
                    이름 : <input type="text" name="name" id="name"/> <br/>
                    전화번호 : <input type="text" name="telephone" id="telephone"/> <br/>
                    이메일 : <input type="text" name="email" id="email"/> <br/>
                </div>
                <div class="submit_button">
                    <button onClick={this.memberInsert}>
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