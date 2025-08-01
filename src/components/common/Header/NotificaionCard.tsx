import { AccountDis } from '@_assets/icon';
import type { NotificationCardProps } from '@_types/notification';


export default function NotificationCard({
  name,
  action,
  time,
  status,
  icon,
  isRead,
}: NotificationCardProps) {
   const bgColor = isRead ? 'white' : '#F9FAFB';
  return (
   <div className="w-full rounded-[6px] box-border"  style={{ backgroundColor: bgColor }}>

      <div className="flex items-start gap-[12px] px-[16px] py-[16px]">
       
        <div className="w-[44px] h-[44px] rounded-full bg-gray20 flex items-center justify-center flex-shrink-0">
          <AccountDis className="w-[24px] h-[24px]" />
        </div>

        <div className="flex flex-col flex-grow gap-[4px]">
          <div className="flex justify-between items-start w-full">
            <div className="text-[15px] text-gray90 leading-[23px] font-['Noto Sans KR']">
              <span className="font-bold">{name}</span>
              <span className="font-normal">님이 </span>
              <span className="font-bold">{action}</span>
              <span className="font-normal">을 했습니다</span>
            </div>
            <div className="text-[13px] text-gray50 whitespace-nowrap flex-shrink-0 ml-[8px]">
              {time}
            </div>
          </div>
          <div className="flex items-center gap-[4px] text-[13px] text-gray90">
            {icon}
            <span>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
