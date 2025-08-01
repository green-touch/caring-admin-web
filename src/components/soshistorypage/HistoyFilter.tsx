import { useState } from 'react';
import classNames from 'classnames';

const FILTERS = ['1주일', '1개월', '3개월'];

export default function SosHistoryFilterBox() {
  const [selected, setSelected] = useState('1주일');
  const [startDate, setStartDate] = useState({ yyyy: '', mm: '', dd: '' });
  const [endDate, setEndDate] = useState({ yyyy: '', mm: '', dd: '' });

  const isInvalidDate: boolean =
    !!startDate.yyyy &&
    !!startDate.mm &&
    !!startDate.dd &&
    !!endDate.yyyy &&
    !!endDate.mm &&
    !!endDate.dd &&
    new Date(`${endDate.yyyy}-${endDate.mm}-${endDate.dd}`) <
    new Date(`${startDate.yyyy}-${startDate.mm}-${startDate.dd}`);

  return (
    <div className="relative bg-white p-6 rounded-md shadow-sm w-full h-[150px]">
  
      <div className="flex items-center mb-6">
        <span className="text-[16px] font-medium text-gray100  ml-2 leading-[150%] mr-[14px]">
          조회기간
        </span>
        <div className="flex gap-0">
          {FILTERS.map((item, idx) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={classNames(
                'h-[32px] rounded-[4px] border text-[16px] leading-[150%] px-[18px] py-[4px]',
                idx !== 0 && 'ml-[-1px]',
                selected === item
                  ? 'bg-gray90 text-white font-bold border-gray90'
                  : 'bg-white text-gray70 font-normal border-gray30'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

   
      <div className="flex gap-4 justify-center">
  
        <div className="flex gap-2 relative">
          {isInvalidDate && (
            <p className="absolute -bottom-[22px] left-0 text-red600 text-[14px] whitespace-nowrap">
              종료일은 시작일보다 빠를 수 없습니다.
            </p>
          )}
          <DateInput
            label="YYYY"
            value={startDate.yyyy}
            onChange={(val) => setStartDate({ ...startDate, yyyy: val })}
          />
          <DateInput
            label="MM"
            value={startDate.mm}
            onChange={(val) => setStartDate({ ...startDate, mm: val })}
          />
          <DateInput
            label="DD"
            value={startDate.dd}
            onChange={(val) => setStartDate({ ...startDate, dd: val })}
          />
        </div>

        <span className="mx-1 text-[16px] font-bold">~</span>

   
        <div className="flex gap-2">
          <DateInput
            label="YYYY"
            value={endDate.yyyy}
            onChange={(val) => setEndDate({ ...endDate, yyyy: val })}
            isError={isInvalidDate}
          />
          <DateInput
            label="MM"
            value={endDate.mm}
            onChange={(val) => setEndDate({ ...endDate, mm: val })}
            isError={isInvalidDate}
          />
          <DateInput
            label="DD"
            value={endDate.dd}
            onChange={(val) => setEndDate({ ...endDate, dd: val })}
            isError={isInvalidDate}
          />
        </div>
      </div>

 
      <button className="absolute right-6 top-1/2 -translate-y-1/2 w-[156px] h-[74px] bg-main900 text-white text-[16px] font-bold rounded-[4px] border border-gray90 shadow-sm">
        조회하기
      </button>
    </div>
  );
}

function DateInput({
  label,
  value,
  onChange,
  isError,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  isError?: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          'w-[88px] h-[42px] border rounded px-2 text-center text-[16px] text-black',
          isError ? 'border-red600' : 'border-[#ccc]',
           'focus:outline-none'
        )}
      />
      <span className="text-[16px] text-gray70 font-medium leading-[152%]">
        {label === 'YYYY' ? '년' : label === 'MM' ? '월' : '일'}
      </span>
    </div>
  );
}
