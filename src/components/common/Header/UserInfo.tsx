import { BellAlert, ChevronDownGray } from '@_assets/icon';

export default function UserInfo() {
  return (
    <div className="flex items-center gap-[24px] flex-shrink-0">
      <button>
        <BellAlert />
      </button>
      <div className="flex items-center gap-[12px] cursor-pointer">
        <div className="w-[36px] h-[36px] rounded-full bg-[#D8D8D8]" />
        <span className="text-[15px] font-normal leading-[23px] text-black font-['Noto Sans KR']">
          김철수
        </span>
        <ChevronDownGray />
      </div>
    </div>
  );
}
