import moment from "moment/dist/moment.js";
import "moment/dist/locale/ko.js";

function Header() {
    return (
        <div className="row mb-3">
            <div className="col-12">
                <h3>오늘 <small className="fs-6">{ moment().format("YYYY년 M월 d일 dddd") }</small></h3>
                
            </div>
        </div>
    );
}

export default Header;