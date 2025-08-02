
import {
  AlertTriangle,
  AccountGreen,
  AlertCircle,
} from '@_assets/icon';

import type { UserStatusProps } from '@_types/indexpage';

const UserStatusBadge = ({ label }: UserStatusProps) => {
  const config = {
    정상: {
      bg: 'bg-green50',
      text: 'text-[#155615]',
      icon: <AccountGreen className="w-4 h-4" />,
    },
    경고: {
      bg: 'bg-yellow50',
      text: 'text-[#6B5900]',
      icon: <AlertCircle className="w-4 h-4" />,
    },
    위험: {
      bg: 'bg-red50',
      text: 'text-red700', 
      icon: <AlertTriangle className="w-4 h-4" />,
    },
  }[label];

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-[2px] rounded-[4px] ${config.bg}`}>
      {config.icon}
      <span className={`text-[17px] font-bold leading-[18px] ${config.text}`}>{label}</span>
    </div>
  );
};

export default UserStatusBadge;
