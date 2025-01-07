import { useState } from "react";

function EventPractice3() {
    /*
    State객체 생성
        - userState()를 실행해서 State객체를 생성한다.
        - 
    */
    const [user, setUser] = useState({
        name: '홍길동',
        email: 'hong@gmail.com',
        tel: '010-1234-5678'
    });

    const eventHandler = function(event) {
        // 지금 이벤트가 발생한 엘리먼트의 입력필드 이름을 조회한다.
        // 지금 이벤트가 발생한 엘리먼트의 입력필드 입력값을 조회한다.
        let name = event.target.name;
        let value = event.target.value;
        
        // State객체에 저장된 사용자 정보를 전개연산자를 사용해서 객체의 값을 갱신한다.
        setUser({
            ...user,
            name: value
        })
        /*
        전개 연산자를 이용한 객체의 복제와 수정
            // 새로운 객체를 생성해서 src에 대입한다.
            let src = {kor:100, math:100, eng:60};

            // 전개연산자를 이용해서 src객체의 모든 속성이 복제된 새로운 객체를 생성한 다음 dest에 대입한다.
            let dest1 = {...src};        // dest1 --> {kor:100, eng:100, math:60}

            // 전개연산자를 이용해서 src객체의 모든 속성을 전개한다.
            // 속성을 추가로 지정할 때 같은 이름으로 지정하면 원래 값을 덮어쓴다.
            let dest2 = {...src, eng:80} // dest2 --> {kor:100, eng:80, math:60}
        */        
    }

    return (
        <div>
            <h2>여러 개의 입력필드 다루기</h2>

            <div>
                <p>입력필드의 현재 입력값</p>
                <dl>
                    <dt>이름</dt><dd>{user.name}</dd>
                    <dt>메일</dt><dd>{user.email}</dd>
                    <dt>전화</dt><dd>{user.tel}</dd>
                </dl>
            </div>

            <form>
                <div>
                    <label>이름</label> <input type="text" name="name" value={user.name} onChange={eventHandler}/>
                </div>
                <div>
                    <label>메일</label> <input type="type" name="email" value={user.email} onChange={eventHandler}/>
                </div>
                <div>
                    <label>전화</label> <input type="type" name="tel" value={user.tel} onChange={eventHandler}/>
                </div>
            </form>
        </div>       
    );
}

export default EventPractice3;