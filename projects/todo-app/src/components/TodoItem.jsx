import moment from "moment/dist/moment.js"

function TodoItem({ id, content, done, createdDate, onUpdate, onDelete }) {
    
    const onChangeChecked = () => onUpdate(id);
    const onClickDelete = () => onDelete(id);
    
    return (
        <div className="row mb-3">
            <div className="col-12">
                <div className="border p-3">
                    <div className="row">
                        <div className="col-1">
                            <input type="checkbox" 
                                checked={done} 
                                onChange={onChangeChecked}/>
                        </div>
                        <div className="col-7">
                            {content}
                        </div>
                        <div className="col-2 text-end">
                            {moment(createdDate).format("YYYY-MM-DD")}
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