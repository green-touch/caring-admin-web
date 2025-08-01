export interface StatusItem {
  id: string;
  name: string;
  time?: number;        
  count?: number;
}

export interface StatusListProps {
  title: string;
  sortText: string;
  items: StatusItem[];
  type: 'time' | 'count';
  headerRight?: React.ReactNode;
}

export interface SosListProps {
  title: string;
  count: number;
  showIcon?: boolean;
  titleColor?: string;
  showSortBox?: boolean;
}


export interface TopStatusBoxProps {
  networkStatus: string;
  currentCount: number;
}


export interface ProcessProps {
  label: string;
  type: 'ing' | 'done';
}

export interface UserStatusProps {
  label: '정상' | '경고' | '위험';
}

