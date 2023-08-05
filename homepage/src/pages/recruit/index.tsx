import Notice from "./notice";
import RepNotice from "./rep_notice";

export default function Recruit() {
    return (
        <div className="font-pretendard py-8">
            <RepNotice/>
            <Notice/>
        </div>
    )
}