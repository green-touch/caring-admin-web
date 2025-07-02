import { useState } from 'react';
import { ChevronDownGray } from '@_assets/icon';
import SidebarSubMenu from './SidebarSubMenu';

const subMenus: Record<string, { label: string; path?: string }[]> = {
  '사용자 관리': [
    { label: '사용자 모니터링', path: '/main/user-monitoring' },
    { label: '사용자 계정 관리', path: '/main/user-account' },
  ],
  'SOS': [
    { label: 'SOS내역 조회', path: '/main/sos-history' },
    { label: 'SOS타임라인 추가하기', path: '/main/sos-timeline' },
  ],
  '복지관 관리': [
    { label: '복지관 직원 관리' },
    { label: '관리자 권한 관리' },
    { label: '복지관 정보 관리' },
  ],
  '설정': [
    { label: '내 정보 조회/수정하기', path: '/main/my-info' },
    { label: '대시보드 관리하기' },
  ],
};

interface Props {
  icon: React.ReactNode;
  label: string;
}

export default function SidebarGroup({ icon, label }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleMenu}
        className={`w-full h-[40px] flex items-center justify-between px-5 text-white ${isOpen ? 'bg-[#516278]' : 'hover:bg-white/10'} rounded transition-all`}
      >
        <div className="flex items-center gap-3">
          <div className="w-[24px] h-[24px] flex items-center justify-center">{icon}</div>
          <span className="text-[15px] font-normal font-['Noto Sans KR']">{label}</span>
        </div>
        <ChevronDownGray />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 mt-1">
          {subMenus[label].map(sub => (
            <SidebarSubMenu key={sub.label} label={sub.label} path={sub.path} />
          ))}
        </div>
      )}
    </div>
  );
}
