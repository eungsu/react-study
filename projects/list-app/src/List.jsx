import { useState } from 'react';

function List() {
    // 신규로 추가되는 데이터의 id로 활용할 값을 State로 관리한다.
    const [nextId, setNextId] = useState(102);
    // 입력필드에 새로 입력되는 참가자 이름을 State로 관리한다.
    const [nextName, setNextName] = useState('')
    // 참가자 목록 데이터를 State로 관리한다.
    const [items, setItems] = useState([
        {id:101, name:"홍길동"},
        {id:100, name:"김유신"}
    ]);

    // 입력필드에서 onChange 이벤트가 발생할 때 실행되는 이벤트 핸들러 함수다.
    const changeNextName = function(event) {
        // State의 nextName값을 갱신한다.
        setNextName(event.target.value);
    }
    // 추가버튼에서 onClick 이벤트가 발생할 때 실행되는 이벤트 핸들러 함수다.
    const addItem = function() {
        // 새로운 참가자 객체를 생성한다.
        let item = {id:nextId, name: nextName};
        // State가 관리하는 참가자 배열의 첫번째 요소로 새로운 참가자 객체를 추가한다.
        items.unshift(item);

        // State가 관리하는 nextId 값을 1증가 시킨다.
        setNextId(nextId + 1);
        // State가 관리하는 입력필드의 값을 ''로 갱신한다.
        setNextName('');
        // State가 관리하는 참가자 목록 배열을 갱신한다.
        setItems(items);
    };

    // 삭제 버튼에서 onclick 이벤트가 발생할 때 실행되는 이벤트 핸들러 함수다.
    const removeItem = function(event) {
        // 버튼의 data-item-id 속성값을 조회한다.
        let id = event.target.getAttribute("data-item-id");
        // 배열의 filter 함수를 사용해서 조회된 id와 일치하지 않는 참가자로 구성된 새로운 배열을 생성하고 
        // State가 관리하는 참가자 목록 배열을 갱신한다.
        setItems(items.filter(function(item) {
            return item.id != id;
        }));
    }


    return (
        <>
            <h2>리스트 컴포넌트</h2>
            <h3>참가자 목록</h3>
    
            <div>
                <label>참가자</label>
                {/*
                    입력필드의 value에 State가 관리하는 nextName 값을 설정한다.
                    입력필드에서 onChange 이벤트 발생시 실행될 이벤트핸들러 함수를 등록한다.
                */}
                <input type="text" 
                    name="name" 
                    value={nextName} 
                    onChange={changeNextName}/>
                {/*
                    버튼에서 onClick 이벤트 발생시 실행될 이벤트핸들러 함수를 등록한다.
                */}
                <button onClick={addItem}>추가</button>
            </div>
            <ul>
                {/* 
                    배열의 map(callback) 메소드를 이용해서 배열의 데이터로 li를 렌더링한다. 
                */}
                {items.map(function(item) {
                    return (
                        <li key={item.id}>{item.name} 
                            {/* 
                                버튼에 data-item-id 속성을 추가해서 삭제할 참가자 id를 설정한다. 
                                버튼에서 onClick 이벤트 발생시 실행될 이벤트핸들러 함수를 등록한다.
                            */}
                            <button data-item-id={item.id} onClick={removeItem}>삭제</button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default List;