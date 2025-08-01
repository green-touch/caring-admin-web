import NoprofileUserIcon from '@_components/common/UserProfileIcon/NoProfileUserIcon';
import type { StatusListProps } from '@_types/indexpage';

export default function StatusList({
    title,
    items,
    type,
    headerRight,
}: StatusListProps) {
    return (
        <>
            <div className="flex justify-between items-center mb-4 h-[40px]">
                <h2 className="text-[24px] font-bold text-black truncate">
                    {title}
                </h2>
                <div>{headerRight ?? <div className="w-[120px]" />}</div>
            </div>

            <div className="bg-white mt-8 rounded-xl p-8 shadow">
                <div className="space-y-8">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                            <NoprofileUserIcon />
                            <span className="text-[22px] text-gray900">{item.name}</span>
                            <span className="ml-auto text-[20px] text-gray900">
                                {type === 'time' && item.time !== undefined && `${item.time}시간 전`}
                                {type === 'count' && item.count !== undefined && `${item.count}회`}
                            </span>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
