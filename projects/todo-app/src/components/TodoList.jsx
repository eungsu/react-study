import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onUpdate, onDelete }) {
    const [keyword, setKeyword] = useState('');
    
    const onChangeSearch = (event) => setKeyword(event.target.value);
    const filtedTodos = () => keyword === "" ? todos : todos.filter((todo) => todo.content.includes(keyword));

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h4>일정 목록</h4>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-12">
                    <form className="border bg-light p-3">
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                name="keyword" 
                                value={keyword} 
                                onChange={onChangeSearch}
                                placeholder="키워드를 입력하세요."/>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12">
                    {filtedTodos().map((todo) => 
                        (
                            <TodoItem {...todo} 
                                key={todo.id} 
                                onUpdate={onUpdate}
                                onDelete={onDelete} />
                        )
                    )}
                </div>
            </div>
        </>
    )
};

export default TodoList;