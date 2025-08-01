import { AccountBlack, LogOutGray } from '@_assets/icon';
import type { UserMenuDropdownProps } from '@_types/Header';

export default function UserMenuDropdown({
  user,
  onMyInfoClick,
  onLogoutClick,
}: UserMenuDropdownProps) {
  return (
    <div className="absolute right-0 top-[60px] w-[260px] bg-white rounded-[6px] shadow-lg border border-gray-200 p-[12px] flex flex-col gap-[8px] z-50">
      <div className="flex items-center gap-[8px] px-[12px] py-[10px]">
        <div className="w-[36px] h-[36px] rounded-full bg-gray30 flex items-center justify-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="사용자 프로필"
              className="w-[24px] h-[24px] rounded-full object-cover"
            />
          ) : (
            <div className="w-[24px] h-[24px] rounded-full bg-gray30" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-[4px] ml-[4px]">
          <div className="text-[16px] leading-[23px] text-[#000000] font-['Noto Sans KR']">
            {user.name}
          </div>
          <div className="text-[14px] leading-[13px] text-gray70 font-['Noto Sans KR']">
            {user.organization}
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-100 my-[4px]" />

      <button
        onClick={onMyInfoClick}
        className="flex items-center gap-[8px] w-full h-[47px] px-[12px] rounded-[4px] hover:bg-[#F0F0F0]"
      >
        <AccountBlack />
        <span className="text-[15px] text-gray90 font-normal font-['Noto Sans KR']">
          내 정보
        </span>
      </button>

      <button
        onClick={onLogoutClick}
        className="flex items-center gap-[8px] w-full h-[47px] px-[12px] rounded-[4px] hover:bg-[#F0F0F0]"
      >
        <LogOutGray />
        <span className="text-[15px] text-gray90 font-normal font-['Noto Sans KR']">
          로그아웃
        </span>
      </button>
    </div>
  );
}
