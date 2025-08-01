
import {
  AlertTriangle,
  AccountGreen,
  AlertCircle,
} from '@_assets/icon';
import type { NotificationCardProps } from "@_types/notification";

export const notificationMock: NotificationCardProps[] = [
  {
    name: '홍길동',
    action: 'SOS 요청',
    time: '4시간 전',
    status: '위험 상태',
    icon: <AlertTriangle className="w-[16px] h-[16px] text-red-500" />,
    isRead: false,
  },
  {
    name: '홍길동',
    action: '전화 요청',
    time: '8시간 전',
    status: '안전 상태',
    icon: <AccountGreen className="w-[16px] h-[16px] text-green-800" />,
    isRead: true,
  },
  {
    name: '홍길동',
    action: '정보 변경 요청',
    time: '8시간 전',
    status: '경고 상태',
    icon: <AlertCircle className="w-[16px] h-[16px] text-green-800" />,
    isRead: true,
  },
  {
    name: '홍길동',
    action: '전화 요청',
    time: '8시간 전',
    status: '안전 상태',
    icon: <AccountGreen className="w-[16px] h-[16px] text-green-800" />,
    isRead: true,
  },
  {
    name: '홍길동',
    action: '전화 요청',
    time: '8시간 전',
    status: '안전 상태',
    icon: <AccountGreen className="w-[16px] h-[16px] text-green-800" />,
    isRead: true,
  },
];