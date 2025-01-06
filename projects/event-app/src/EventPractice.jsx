function EventPractice() {
    // 매개변수가 없는 이벤트핸들러 함수 정의하기
    const handler1 = function() {
        alert("버튼1이 클릭되었습니다.");
    };
    // 매개변수가 있는 이벤트핸들러 함수 정의하기
    const handler2 = function(event) {
        alert("버튼2이 클릭되었습니다.");
    };
    // 화살표 함수 표현법으로 매개변수가 없는 이벤트핸들러 함수 정의하기
    const handler3 = () => {
        alert("버튼3이 클릭되었습니다.");
    };
    // 화살표 함수 표현법으로 매개변수가 있는 이벤트핸들러 함수 정의하기
    const handler4 = (event) => {
        alert("버튼4가 클릭되었습니다.");
    }
    // 화살표 함수 표현법으로 매개변수가 하나 있는 이벤트핸들러 함수 정의하기
    const handler5 = event => {
        alert("버튼5가 클릭되었습니다.");
    }
    // 화살표 함수 표현법으로 매개변수가 하나 있고, 수행문이 하나 있는 이벤트핸들러 함수 정의하기
    const handler6 = event => alert("버튼6가 클릭되었습니다.");
    return (
        <div>
            <p>버튼을 클릭해보세요</p>
            <button onClick={handler1}>버튼1</button>
            <button onClick={handler2}>버튼2</button>
            <button onClick={handler3}>버튼3</button>
            <button onClick={handler4}>버튼4</button>
            <button onClick={handler5}>버튼5</button>
            <button onClick={handler6}>버튼6</button>
        </div>
    )
}

export default EventPractice;