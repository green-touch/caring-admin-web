import { useNavigate } from 'react-router-dom';

interface Props {
  label: string;
  path?: string;
}

export default function SidebarSubMenu({ label, path }: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => path && navigate(path)}
      className="w-full h-[39px] text-left pl-[61px] pr-3 text-white hover:bg-white/10 rounded"
    >
      <span className="text-[15px] font-normal font-['Noto Sans KR']">
        {label}
      </span>
    </button>
  );
}
