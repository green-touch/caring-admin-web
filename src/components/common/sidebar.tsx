import { Account, BellSos, Home, Setting } from '@_assets/icon';
import SidebarGroup from './sidebar/SidebarGroup';

export default function Sidebar() {
  return (
    <aside className="w-[265px] h-screen bg-[#233042] border-r border-white/10 shadow-[6px_4px_6px_rgba(0,0,0,0.02)] pt-5 pl-5 flex flex-col gap-10 text-white">
      <div className="h-[63px] flex items-center justify-start px-3">
        <span className="text-[#F8F8F8] text-[32px] w-114px font-bold tracking-wide">
          CARING
        </span>
      </div>

      <div className="flex flex-col gap-4 px-0 -translate-x-[10px]">
        <SidebarGroup icon={<Account className="w-6 h-6" />} label="사용자 관리" />
        <SidebarGroup icon={<BellSos className="w-6 h-6" />} label="SOS" />
        <SidebarGroup icon={<Home className="w-6 h-6" />} label="복지관 관리" />
        <SidebarGroup icon={<Setting className="w-6 h-6" />} label="설정" />
      </div>
    </aside>
  );
}
