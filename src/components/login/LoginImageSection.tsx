import ChevronRight from "@_assets/icon/ic_chevron_right_main_50.svg?react";
import caring_symbol from "@_assets/images/img_caring_symbol.png";
import img_login_image from "@_assets/images/img_log_in.png";
import { Link } from "react-router-dom";

export const LoginImageSection = () => {

    return (
        <section className="w-1/2 flex flex-col items-center justify-center bg-main600 px-10 rounded-l-2xl py-10">
            <div className="flex flex-col items-start justify-center gap-2 w-full mb-8">
                <img src={caring_symbol} className="w-[20px]" alt="caring_symbol" />
                <h1 className="text-2xl font-bold text-white">독거 어르신의 안전을 지키는</h1>
                <h1 className="text-2xl font-bold text-white">스마트 돌봄 서비스</h1>
            </div>
            <img src={img_login_image} className="w-full" alt="login_image" />
            <div className="flex flex-col items-start justify-center gap-2 w-full mb-2">
                <p className="text-xs text-white">Caring은 독거 어르신들이 더욱 안전하고 존중받으며</p>
                <p className="text-xs text-white">살아갈 수 있도록 돕는 서비스입니다.</p>

            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full mb-2">
                <Link to="/login" className="text-sm text-white flex flex-row items-center justify-center gap-1">

                    <span className="font-bold">서비스 소개</span>
                    <ChevronRight className="w-[16px] h-[16px]" />
                </Link>
            </div>

        </section>
    )
}