import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const FILTERS = ['1주일', '1개월', '3개월'] as const;

const dateSchema = z.object({
  yyyy: z.string().length(4, '연도는 4자리여야 합니다'),
  mm: z.string().length(2, '월은 2자리여야 합니다'),
  dd: z.string().length(2, '일은 2자리여야 합니다'),
});

const schema = z.object({
  filter: z.enum(FILTERS),
  startDate: dateSchema,
  endDate: dateSchema,
});

type FormData = z.infer<typeof schema>;

export default function SosHistoryFilterBox() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      filter: '1주일',
      startDate: { yyyy: '', mm: '', dd: '' },
      endDate: { yyyy: '', mm: '', dd: '' },
    },
  });

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const isInvalidDate =
    startDate.yyyy &&
    startDate.mm &&
    startDate.dd &&
    endDate.yyyy &&
    endDate.mm &&
    endDate.dd &&
    new Date(`${endDate.yyyy}-${endDate.mm}-${endDate.dd}`) <
    new Date(`${startDate.yyyy}-${startDate.mm}-${startDate.dd}`);

  const onSubmit = (data: FormData) => {
    console.log('필터 값:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-white p-6 rounded-md shadow-sm w-full h-[150px]"
    >
      <div className="flex items-center mb-6">
        <span className="text-[16px] font-medium text-gray100  ml-2 leading-[150%] mr-[14px]">
          조회기간
        </span>
        <div className="flex gap-0">
          {FILTERS.map((item, idx) => (
            <button
              key={item}
              type="button"
              onClick={() => setValue('filter', item)}
              className={`h-[32px] rounded-[4px] border text-[16px] leading-[150%] px-[18px] py-[4px] 
                ${idx !== 0 ? 'ml-[-1px]' : ''} 
                ${watch('filter') === item
                  ? 'bg-gray90 text-white font-bold border-gray90'
                  : 'bg-white text-gray70 font-normal border-gray30'}`}
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
          <DateInput label="YYYY" error={errors.startDate?.yyyy?.message} {...register('startDate.yyyy')} />
          <DateInput label="MM" error={errors.startDate?.mm?.message} {...register('startDate.mm')} />
          <DateInput label="DD" error={errors.startDate?.dd?.message} {...register('startDate.dd')} />
        </div>

        <span className="mx-1 text-[16px] font-bold">~</span>

        <div className="flex gap-2">
          <DateInput
            label="YYYY"
            error={errors.endDate?.yyyy?.message || (isInvalidDate ? '잘못된 날짜입니다' : undefined)}
            {...register('endDate.yyyy')}
          />
          <DateInput
            label="MM"
            error={errors.endDate?.mm?.message || (isInvalidDate ? '잘못된 날짜입니다' : undefined)}
            {...register('endDate.mm')}
          />
          <DateInput
            label="DD"
            error={errors.endDate?.dd?.message || (isInvalidDate ? '잘못된 날짜입니다' : undefined)}
            {...register('endDate.dd')}
          />
        </div>
      </div>

      <button
        type="submit"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[156px] h-[74px] bg-main900 text-white text-[16px] font-bold rounded-[4px] border border-gray90 shadow-sm"
      >
        조회하기
      </button>
    </form>
  );
}

type DateInputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function DateInput({ label, error, ...rest }: DateInputProps) {
  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        placeholder={label}
        {...rest}
        className={`w-[88px] h-[42px] border rounded px-2 text-center text-[16px] text-black 
          ${error ? 'border-red600' : 'border-[#ccc]'} focus:outline-none`}
      />
      <span className="text-[16px] text-gray70 font-medium leading-[152%]">
        {label === 'YYYY' ? '년' : label === 'MM' ? '월' : '일'}
      </span>
    </div>
  );
}
