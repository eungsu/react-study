import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
    const username = "홍길동";
    const userScore = { kor:100, eng: 90, math: 80}

    return (
        <div>
            <h2>부모컴포넌트</h2>

            <Child1 name={username} />
            <Child2 score={userScore} />
        </div>
    );
}

export default Parent;