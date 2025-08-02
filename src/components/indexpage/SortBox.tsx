import { ChevronDownBlack } from "@_assets/icon";

interface SortBoxProps {
  label: string;
}

export default function SortBox({ label }: SortBoxProps) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-[20px] text-gray90 font-['Noto Sans KR']">
        정렬기준
      </span>
      <button
        className="flex items-center gap-2 h-[39px] px-[12px] py-[8px] rounded-[4px] border border-gray40 text-gray90 font-['Noto Sans KR'] text-[20px] leading-[22px]"
      >
        {label}
        <ChevronDownBlack />
      </button>
    </div>
  );
}
