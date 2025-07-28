import type{ TopStatusBoxProps } from "@_types/indexpage";

export default function TopStatusBox({ networkStatus, currentCount }: TopStatusBoxProps) {
  return (
    <div className="bg-background px-6 py-4 mt-[24px]">
      <div className="flex flex-col gap-1 min-w-[320px]">
        <p className="text-[15px] font-normal leading-[23px] text-gray70 font-['Noto Sans KR'] whitespace-nowrap">
          나의 네트워크 상태 : {networkStatus}
        </p>
        <div className="flex items-baseline gap-1 whitespace-nowrap">
          <span className="text-[32px] font-bold leading-[48px] text-main600 font-['Noto Sans KR']">
            현재 {currentCount}명
          </span>
          <span className="text-[32px] font-bold leading-[48px] text-gray90 font-['Noto Sans KR']">
            을 담당 중입니다!
          </span>
        </div>
      </div>
    </div>
  );
}
