
import NoprofileUserIcon from '@_components/common/UserProfileIcon/NoProfileUserIcon';
import type { StatusListProps } from '@_types/indexpage'; 

export default function StatusList({
    title,
    items,
    type,
    headerRight,
}: StatusListProps) {
    return (
        <div>

            <div className="flex justify-between items-center mt-10 mb-2 px-1">

                <div className="text-[25px] font-bold text-black leading-[39px]">
                    {title}
                </div>
                <div className="flex items-center">
                    {headerRight}
                </div>
            </div>


            <div className="bg-white mt-8 rounded-xl p-8 shadow">
                <div className="space-y-8">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">

                            < NoprofileUserIcon />


                            <span className="text-[22px] text-gray900">이름</span>

                            <span className="ml-auto text-[20px] text-gray900">
                                {type === 'time' ? `${item}` : `${item}회`}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
