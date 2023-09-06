import Background from "@/app/components/Background";
import FAQ from "./FAQ";
import Notice from "./notice";
import RepNotice from "./rep_notice";

export default function Recruit() {
    return (
        <div className="h-[2500px] flex items-center justify-center">
        <Background>
        <div className="font-pretendard py-8">
            <RepNotice/>
            <Notice/>
            <FAQ/>
        </div>
        </Background>
        </div>
    )
}