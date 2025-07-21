type Props = {
  title: string;
  subtitle: string;
};

export default function SearchResultItem({ title, subtitle }: Props) {
  return (
    <div className="w-full h-[71px] bg-white rounded-[4px] flex items-center justify-between px-[16px] py-[12px] shadow-sm">
      <div className="flex flex-col justify-center">
        <span className="text-[16px] font-bold leading-[23px] text-gray90 font-['Noto Sans KR']">
          {title}
        </span>
        <span className="mt-[4px] text-[13px] font-normal leading-[18px] text-gray70 font-['Noto Sans KR']">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
