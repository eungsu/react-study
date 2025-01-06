function Child2(props) {

    return (
        <div>
            <h3>두번째 자식 컴포넌트</h3>
            
            <dl>
                <dt>국어</dt><dd>{props.score.kor}</dd>
                <dt>영어</dt><dd>{props.score.eng}</dd>
                <dt>수학</dt><dd>{props.score.math}</dd>
            </dl>
        </div>
    );
}

export default Child2;