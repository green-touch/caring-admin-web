import NotificationCard from './NotificaionCard';
import type { NotificationCardProps } from '@_types/notification';

interface Props {
  notifications: NotificationCardProps[];
  unreadCount: number;
}

export default function NotificationDropdown({ notifications, unreadCount }: Props) {
  return (
    <div className="absolute right-0 top-[60px] w-[420px] h-[562px] bg-white rounded-[4px] shadow-lg border border-gray-200 flex flex-col z-50">
      <div className="flex justify-between items-center px-[16px] pt-[16px]">
        <div className="flex items-center gap-[6px] text-[16px] font-semibold text-black">
          알림
          <span className="text-[15px] font-bold leading-[23px] font-['Noto Sans KR'] text-[#152C4A] px-[8px] h-[23px] bg-[#F0F0F0] rounded-[4px] flex items-center justify-center">
            {unreadCount}
          </span>
        </div>
        <button className="text-[15px] text-main700 font-medium">전체 알림 확인</button>
      </div>

      <div className="flex flex-col gap-[12px] overflow-hidden flex-1 mt-[16px]">
        {notifications.slice(0, 5).map((item, idx) => (
          <NotificationCard key={idx} {...item} />
        ))}
      </div>

      <div className="py-[16px] border-t border-gray-100 mt-[12px] px-[16px]">
        <button className="text-[15px] font-medium text-main700 text-center w-full leading-[23px] font-['Noto Sans KR']">
          모든 알림 보기
        </button>
      </div>
    </div>
  );
}
