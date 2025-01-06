import Counter1 from './Counter1'
import Counter2 from './Counter2'

function App() {

  return (
    <>
      <h1>State를 이용한 컴포넌트 데이터 관리</h1>
      <Counter1 />
      <Counter2 num={100} />
    </>
  )
}

export default App
