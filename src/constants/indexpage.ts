
import userImage1 from '@_assets/images/img_user_ex_01.png';
import userImage2 from '@_assets/images/img_user_ex_02.png';
import { TimelineData } from './sosDetail';
import type { TimelineItem } from './sosDetail';

export interface SosItem {
  id: number;
  userId: string;
  name: string;
  status: string;
  requestDate: string;
  completeDate: string;
  location: string;
  requester: string;
  details: string[];
  image: string;
  timelineData?: TimelineItem[];
}
export const sosListData = [
  {
    id: 1,
    userId: 'u1',
    name: '홍길동',
    status: '진행중',
    requestDate: '2025.01.23',
    completeDate: '미완료',
    location: '서울특별시 종로구',
    requester: '홍길동',
    details: ['넘어짐 감지됨', '움직임 없음', '배터리 10% 이하'],
    image: userImage1,
    timelineData:TimelineData,
  },
  {
    id: 2,
    userId: 'u2',
    name: '김영희',
    status: '진행중',
    requestDate: '2025.01.11',
    completeDate: '미완료',
    location: '서울특별시 강남구',
    requester: '김영희',
    details: ['긴급호출 버튼 눌림', 'GPS 신호 약함'],
    image: userImage2,
  },
  {
    id: 3,
    userId: 'u3',
    name: '이름',
    status: '처리완료',
    requestDate: '2025.01.03',
    completeDate: '2025.01.20',
    location: '서울특별시 송파구',
    requester: '이름',
    details: ['이상행동 감지', '움직임 없음'],
    image: '',
  },
];

export const UserListdata = [
  {
    id: 'u1',
    name: '홍길동',
    phone: '010-1234-5678',
    battery: '정상',
    screen: '정상',
    updated: '1분 전',
    image: userImage1,
    connected: true,
  },
  {
    id: 'u2',
    name: '김영희',
    phone: '010-1234-5678',
    battery: '경고',
    screen: '정상',
    updated: '1분 전',
    image: userImage2,
    connected: true,
  },
  {
    id: 'u3',
    name: '이름',
    phone: '010-1234-5678',
    battery: '정상',
    screen: '경고',
    updated: '12시간 전',
    image: '',
    connected: false,
  },
  {
    id: 'u4',
    name: '이름',
    phone: '010-1234-5678',
    battery: '정상',
    screen: '경고',
    updated: '14시간 전',
    image: '',
    connected: false,
  },
  {
    id: 'u5',
    name: '이름',
    phone: '010-1234-5678',
    battery: '경고',
    screen: '경고',
    updated: '16시간 전',
    image: '',
    connected: true,
  },
];
