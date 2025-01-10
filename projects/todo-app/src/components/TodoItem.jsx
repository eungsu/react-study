import moment from "moment/dist/moment.js"

function TodoItem({ todo, onUpdate, onDelete }) {
    
    const onChangeChecked = () => onUpdate(todo.id);
    const onClickDelete = () => onDelete(todo.id);
    
    return (
        <div className="row mb-3">
            <div className="col-12">
                <div className="border p-3">
                    <div className="row">
                        <div className="col-1">
                            <input type="checkbox" 
                                checked={todo.done} 
                                onChange={onChangeChecked}/>
                        </div>
                        <div className="col-7">
                            {todo.content}
                        </div>
                        <div className="col-2 text-end">
                            {moment(todo.createdDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="col-2 text-end">
                            <button className="btn btn-danger btn-sm"
                                onClick={onClickDelete}>삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;