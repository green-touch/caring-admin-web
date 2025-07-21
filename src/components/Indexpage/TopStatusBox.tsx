export default function TopStatusBox() {
  return (
     <div className="h-[75px] bg-background px-6 py-4 flex items-center justify-between mt-[24px]">

     
      <div className="flex flex-col gap-1">
        <p className="text-[15px] font-normal leading-[23px] text-gray70 font-['Noto Sans KR']">
          나의 네트워크 상태 : 양호
        </p>
        <div className="flex items-baseline">
          <span className="text-[32px] font-bold leading-[48px] text-main600 font-['Noto Sans KR']">
            현재 10명
          </span>
          <span className="text-[32px] font-bold leading-[48px] text-gray90 font-['Noto Sans KR']">
            을 담당 중입니다!
          </span>
        </div>
      </div>
    </div>
  );
}
