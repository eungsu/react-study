import { useState } from "react";

function EventPractice2() {
    const [username, setUsername] = useState('');
    
    /*
    이벤트 핸들러 함수 정의하기
        - eventHanler는 이벤트 핸들러 함수다.
        - 매개변수 event는 리액트의 SyntheticEvent 이벤트객체를 전달받는다.
        - event.target는 이벤트가 발생한 엘리먼트를 반환한다.
        - event.target.value는 입력필드의 값을 반환한다.

        - setUsername(inputValue)는 State의 값을 현재 입력필드의 값으로 변경한다.
    */
    const eventHandler = function(event) {
        let inputValue = event.target.value;
        console.log("입력필드의 입력값", inputValue);

        setUsername(inputValue);
    }

    return (
        <div>
            <h2>입력필드 다루기</h2>
            <p>입력필드에 State의 현재 값을 표시하고, 입력필드의 값을 변경하면 State의 값을 갱신한다.</p>

            <p>입력필드의 값 : {username}</p>

            <form>
                <div>
                    <label>이름</label>
                    {/*
                        type="text"는 입력필드의 타입을 지정한다.
                        name="name"은 입력필드의 이름을 지정한다. 이름은 name다.
                        value={username}은 입력필드의 값을 지정한다. 
                            State객체의 username값을 입력필드의 값으로 설정한다.
                        onChange={eventHandler}은 이벤트핸들러를 등록시킨다.
                            onChange 이벤트가 발생하면 eventHandler 함수를 실행시킨다.
                    */}
                    <input
                        type="text"
                        name="name"
                        value={username}
                        onChange={eventHandler} />
                </div>
            </form>
        </div>
    );
}

export default EventPractice2;