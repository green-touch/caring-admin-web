import { useState, useRef, useEffect } from 'react';
import { BellAlert, ChevronDownGray } from '@_assets/icon';
import { notificationMock } from '@_constants/notification';
import NotificationDropdown from './NotificationDropDown';
import UserMenuDropdown from './UserMenuDropdown';



export default function UserInfo() {

  const [isOpen, setIsOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState(notificationMock);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const user = {
    name: '김철수',
    organization: '행복 복지관 소속',
    avatar: '',
  };
  const handleMyInfoClick = () => {
    console.log('내 정보 클릭됨');
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    console.log('로그아웃 클릭됨');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsAlarmOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <div className="relative flex items-center gap-[24px] flex-shrink-0" ref={dropdownRef}>
      <button
        onClick={() => {
          setIsAlarmOpen((prev) => !prev);
          setIsOpen(false);
        }}
        className="relative"
      >
        <BellAlert />
        {unreadCount > 0 && (
          <div className="absolute top-[2px] left-[11px] w-[12px] h-[12px] rounded-[12px] bg-main700 text-white text-[10px] flex items-center justify-center font-bold">
            {unreadCount}
          </div>
        )}
      </button>
      <div
        className="flex items-center gap-[12px] cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setIsAlarmOpen(false);
        }}
      >
        <div className="w-[36px] h-[36px] rounded-full bg-gray30 flex items-center justify-center">
          <div className="w-[24px] h-[24px] rounded-full bg-gray30" />
        </div>
        <span className="text-[15px] font-normal leading-[23px] text-black font-['Noto Sans KR']">
          김철수
        </span>
        <ChevronDownGray />
      </div>

      {isAlarmOpen && (
        <NotificationDropdown
          notifications={notifications}
          unreadCount={unreadCount}
        />
      )}

      {isOpen && (
        <UserMenuDropdown
          user={user}
          onMyInfoClick={handleMyInfoClick}
          onLogoutClick={handleLogoutClick}
        />
      )}

    </div>
  );
}
