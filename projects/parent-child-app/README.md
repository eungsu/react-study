# 리액트 샘플 프로젝트

- 부모 컴포넌트에서 자식 컴포넌트로 Props를 이용해서 값을 전달하는 샘플 애플리케이션이다.
- Parent 컴포넌트에서는 Child1 컴포넌트에 숫자값을 Props로 전달한다.
    ```javascript
    function Parent() {
        const username = "홍길동";

        return (
            <Child1 name={username}>
        )
    }
    ```

    ```javascript
    function Child1(props) {
        /*
        props ---> {name: "홍길동"}
        */
        return (
            <p>사용자 이름 : {props.name}</p>
        )
    }
    ```
- Parent 컴포넌트에서는 Child2 컴포넌트에 객체를 Props로 전달한다.
    ```javascript
    function Parent() {
        const userScore = { kor: 100, eng: 90, math: 80}

        return (
            ...
            <Child2 score={userScore}>
            ...
        )
    }
    ```

    ```javascript
    function Child2(props) {
        /*
        props ---> {score: {kor: 100, eng: 90, math: 80} }
        */
        return (
            <dl>
                <dt>국어</dt><dd>{props.score.kor}</dd>
                <dt>영어</dt><dd>{props.score.eng}</dd>
                <dt>수학</dt><dd>{props.score.math}</dd>
            </dl>
        )
    }
    ```