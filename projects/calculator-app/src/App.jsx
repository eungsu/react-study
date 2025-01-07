import { useState } from 'react'
import './App.css'

function App() {
    // State 객체 생성
    // State 객체에는 현재 계산기의 상태를 나타내는 정보가 포함된 객체가 저장된다.
    const [data, setData] = useState({
        output: 0,          // 출력칸에 표시되는 값
        prev: '',           // 이전에 입력된 값 혹은 연산결과
        curr: '',           // 현재 입력된 값
        operator: ''        // 연산자
    });

    // 계산기에서 제공하는 연산자를 담고 있는 배열
    const operators = ['+', '-', '*', '/', '='];

    // 계산기의 버튼을 클릭할 때 마다 실행되는 이벤트 핸들러 함수다.
    const operation = function(event) {
        // 현재 클릭한 버튼의 값을 조회한다.
        let value = event.target.value;     

        if (value === 'Clear' ) {                   // Clear 버튼을 클릭했다면                      
            data.output = 0;
            data.operator = '';
            data.prev = '';
            data.curr = '';
        } else if (operators.includes(value)) {     // 연산기호 버튼을 클릭했다면
            // 현재 입력값을 숫자로 변환한다.
            data.curr = Number(data.curr);

            // 이전에 입력한 연산자가 저장되어 있는지 체크한다.
            if (data.operator != '') {              // 이전에 입력한 연산자가 있으면
                // 연산자에 맞는 연산작업을 수행한다. 
                if (data.operator === '+') {
                    data.prev = data.prev + data.curr;
                } else if (data.operator === '-') {
                    data.prev = data.prev - data.curr;
                } else if (data.operator === '*') {
                    data.prev = data.prev*data.curr;
                } else if (data.operator === '/') {
                    data.prev = data.prev/data.curr;
                } 
                // 연산결과를 output에 대입한다.
                data.output = data.prev;
                // 현재 입력값을 지운다.
                data.curr = '';
                
            } else {                                // 이전에 입력된 연산자가 없으면
                data.prev = data.curr;
                data.curr = '';
            }
            data.operator = value;
            
            if (value === '=') {                    // 지금한 클릭한 버튼의 연산자가 "=" 이면
                data.operator = '';
                data.prev = '';
                data.curr = '';
            }
        } else {                                    // 연산기호 버튼을 클릭하지 않았다면
            data.curr = data.curr + value;
            data.output = data.curr;
        }

        // State 객체에 저장된 값을 업데이트한다.
        setData({...data});
    }

    return (
        <div className='calculator'>
            <div>
                <h1>계산기 애플리케이션</h1>
                <p>[{data.output}] [{data.prev}] [{data.curr}] [{data.operator}]</p>
            </div>
            <form name="form">
                <input type="text" name="output" value={data.output} readOnly />
                <input type="button" className="clear" value="Clear" onClick={operation} />
                <input type="button" className="operator" value="+" onClick={operation}  disabled={data.curr == ''}/>
                <input type="button" value="1" onClick={operation} />
                <input type="button" value="2" onClick={operation} />
                <input type="button" value="3" onClick={operation} />
                <input type="button" className="operator" value="-" onClick={operation}  disabled={data.curr == ''}/>
                <input type="button" value="4" onClick={operation} />
                <input type="button" value="5" onClick={operation} />
                <input type="button" value="6" onClick={operation} />
                <input type="button" className="operator" value="*" onClick={operation}  disabled={data.curr == ''}/>
                <input type="button" value="7" onClick={operation} />
                <input type="button" value="8" onClick={operation} />
                <input type="button" value="9" onClick={operation} />
                <input type="button" className="operator" value="/" onClick={operation} disabled={data.curr == ''}/>
                <input type="button" className="dot" value="." onClick={operation} />
                <input type="button" value="0" onClick={operation} />
                <input type="button" className="operator result" value="=" onClick={operation} disabled={data.operator == '' || !data.curr}/>
            </form>
        </div>
    )
}

export default App;
