import Background from "@/app/components/Background";
import ApplicationNotice from "./ap_notice";
import Caution from "./caution";
import Form from "./form";
import Agreement from "./agreeement";


export default function Recruit() {
    return (
        <div className="h-[5600px] s:h-[4800px] font-pretendard flex flex-col justify-center items-center content-center">
            <Background>
                <div className="w-full felx flex col justify-center items-center">
                    <div className="w-3/4">
                        <ApplicationNotice/>
                        <Caution/>
                        <Form/>
                    </div>
                </div>
            </Background>
        </div>
    )
}