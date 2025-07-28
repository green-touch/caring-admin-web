export interface UserMenuDropdownProps {
  user: {
    name: string;
    organization: string;
    avatar?: string;
  };
  onMyInfoClick?: () => void;
  onLogoutClick?: () => void;
}