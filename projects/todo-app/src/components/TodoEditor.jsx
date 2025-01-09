import { useState, useRef } from "react";
import moment from "moment/dist/moment.js"

function TodoEditor({ onCreate }) {

    const [todo, setTodo] = useState({
        content:'',
        createdDate: moment().format("YYYY-MM-DD")
    });
    const contentRef = useRef();

    const onFieldChange = (event) => {
        setTodo({...todo, [event.target.name]:event.target.value});
    }
    const onBtnClick = () => {
        if (!todo.content) {
            alert("내용을 입력하세요");
            contentRef.current.focus();
            return;
        }

        onCreate(todo);
        setTodo({content:'', createdDate: moment().format("YYYY-MM-DD")});
    }
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h3>새 일정 등록</h3>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <form className="border bg-light p-3">
                        <div className="form-group mb-3">
                            <label className="form-label">내용</label>
                            <textarea className="form-control" rows="3" name="content" ref={contentRef} value={todo.content} onChange={onFieldChange}></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">날짜</label>
                            <input className="form-control" type="date" name="createdDate" value={todo.createdDate} onChange={onFieldChange} />
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-primary btn-sm" onClick={onBtnClick}>등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TodoEditor;