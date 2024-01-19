import Background from "@/app/components/Background";
import FAQ from "./FAQ";
import Notice from "./notice";
import RepNotice from "./rep_notice";

export default function Recruit() {
    return (
        <div className="h-[3200px] x:h-[3100px] s:h-[3600px] flex items-center justify-center m:h-[3200px]">
            <Background>
            <div className="font-pretendard py-0 x:py-10">
                <RepNotice/>
                <Notice/>
                <FAQ/>
            </div>
            </Background>
        </div>
    )
}