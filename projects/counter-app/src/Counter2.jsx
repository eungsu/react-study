import { useState } from "react";

// Props를 통해서 부모 컴포넌트가 전달한 값을 전달받는다.
//      <Counter2 num={100}>
//      부모 컴포넌트가  <Counter2 /> 컴포넌트를 사용할 때 num={100}과 같이 설정해서 Counter2 컴포넌트에 props를 전달한다.
function Counter2(props) {
    const [count, setCount] = useState(props.num);

    const incrementCount = function() {
        setCount(count + 1);
    }
    const decrementCount = () => setCount(count - 1);

    return (
        <div>
            <h2>기본값을 부모컴포넌트로부터 전달받는 카운터 컴포넌트</h2>
            <p>현재 카운터 값 : {count}</p>

            <button onClick={decrementCount}>감소</button>
            <button onClick={incrementCount}>증가</button>
        </div>
    );
};

export default Counter2;