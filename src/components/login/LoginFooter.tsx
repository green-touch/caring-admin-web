import logo_text_black from "@_assets/images/logo_text_black.png";

export default function LoginFooter() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 mb-10">
            <section className="flex flex-row gap-[10px] text-center items-center justify-center">
                <p className="text-sm text-gray90">케어링 이용 약관</p>
                <div className="w-[1px] h-[15px] bg-[#999999]" />
                <p className="text-sm text-gray90 font-bold">개인정보 처리방침</p>
            </section>
            <section className="flex flex-row gap-[10px] items-center justify-center">
                <img src={logo_text_black} className="h-[15px]" alt="logo" />
                <p className="text-xs text-gray90">ⓒ CARING. All rights reserved.</p>
            </section>
        </footer>
    )
}