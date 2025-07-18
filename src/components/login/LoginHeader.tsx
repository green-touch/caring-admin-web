import logo from "@_assets/images/logo.png";

export default function LoginHeader() {
    return (
        <div
            className="
        flex flex-row justify-between items-center
        p-[16px_24px] gap-[10px]
        w-full h-fit
        bg-white
        border-b border-[#F0F0F0]
      "
        >
            <img src={logo} className="w-[100px]" alt="logo" />
            <span className="text-sm text-gray90">서비스 소개</span>
        </div>
    )
}