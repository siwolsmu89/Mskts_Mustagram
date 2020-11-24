import React, {Component} from 'react';

class SnsLogin extends Component{
    render() {
        return (
            <div>
                <div>
                    <div class="main_title">
                        <h1>
                            Mustagram
                        </h1>
                    </div>
                    <div>
                        친구들의 사진과 동영상을 보려면 가입하세요.
                    </div>
                </div>
                <br/>
                <div>
                    <button>Naver로 로그인</button>
                    <button>KakaoTalk으로 로그인</button>
                    <button>facebook으로 로그인</button>
                </div>
                <br/>
            </div>
        );
    }
}

export default SnsLogin