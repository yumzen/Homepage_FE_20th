import ApplicationNotice from "./ap_notice";
import Caution from "./caution";
import Form from "./form";


export default function Recruit() {
    return (
        <div className="font-pretendard flex flex-col justify-center items-center">
            <ApplicationNotice/>
            <div className="mt-2 h-[3px] w-5/6 bg-[#000000]"/>
            <Caution/>
            <div className="mt-2 h-[3px] w-5/6 bg-[#000000]"/>
            <Form/>
        </div>
    )
}