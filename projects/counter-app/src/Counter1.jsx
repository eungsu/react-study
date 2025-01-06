import { useState } from "react";

function Counter1() {
    const [count, setCount] = useState(0);

    const incrementCount = function() {
        setCount(count + 1);
    }
    const decrementCount = () => setCount(count - 1);

    return (
        <div>
            <h2>기본값이 0인 카운터 컴포넌트</h2>
            <p>현재 카운터 값 : {count}</p>

            <button onClick={decrementCount}>감소</button>
            <button onClick={incrementCount}>증가</button>
        </div>
    );
};

export default Counter1;