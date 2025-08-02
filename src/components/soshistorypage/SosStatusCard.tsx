
import { ClockFilled, Battery0Off, GlobeLineGray } from '@_assets/icon';

export default function SosStatusCard() {
  return (
    <div className="bg-white rounded-[8px] p-6 shadow-[4px_4px_8px_#00000005] w-full">
      <p className="text-[20px] font-bold text-gray100 mb-6">요청 당시 상태</p>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray70 text-[16px]">
            <ClockFilled width={24} height={24} />
            <span className="ml-2">마지막 접속시간</span>
          </div>
          <span className="text-[16px] font-semibold text-gray90">48시간 전</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray70 text-[16px]">
            <Battery0Off width={24} height={24} />
            <span className="ml-2">배터리 상태</span>
          </div>
          <span className="text-[16px] font-semibold text-gray90">0%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray70 text-[16px]">
            <GlobeLineGray width={24} height={24} />
            <span className="ml-2">인터넷 접속 상태</span>
          </div>
          <span className="text-[16px] font-semibold text-gray90">미접속</span>
        </div>
      </div>
    </div>
  );
}
