import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// id가 root인 엘리먼트를 검색한다.
// 검색한 엘리먼트로 Root 엘리먼트로 지정한다.
// Root 엘리먼트에 App 컴포넌트 반환하는 화면을 렌더링한다. 
createRoot(document.getElementById('root')).render( <App /> )
