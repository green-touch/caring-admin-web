import { ChevronRightMain900 } from '@_assets/icon';

interface SectionTitleProps {
  title: string;
  count?: number;
  showIcon?: boolean;
  titleColor?: string;
  periodText?: string
}

export default function SectionTitle({
  title,
  count = 0,
  showIcon = false,
  titleColor = 'text-gray70',
  periodText, 
}: SectionTitleProps) {
  return (
    <div className="flex justify-between items-center gap-2 mt-2 w-full">
      <div className="flex items-center gap-2">
        <h2 className={`text-[22px] font-normal leading-[152%] whitespace-nowrap ${titleColor}`}>
          {title}
        </h2>
        {typeof count === 'number' && (
          <span className="text-[22px] font-bold leading-[152%] text-black">
            {count}명
          </span>
        )}
        {showIcon && <ChevronRightMain900 className="w-5 h-5 text-main900" />}
      </div>

      {periodText && (
        <span className="text-[16px] font-normal leading-[150%] text-gray70">
          {periodText}
        </span>
      )}
    </div>
  );
}