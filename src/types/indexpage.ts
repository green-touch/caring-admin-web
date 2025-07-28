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



export interface TopStatusBoxProps {
  networkStatus: string;
  currentCount: number;
}


export interface ProcessStatusProps {
  label: string;
  type: 'ing' | 'done';
}

export interface UserStatusProps {
  label: '정상' | '경고' | '위험';
}