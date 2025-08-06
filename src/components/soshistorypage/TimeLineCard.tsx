

import { CheckBlue, ClockFilled, MapFilled } from '@_assets/icon';
import type { TimelineItem } from '@_constants/sosDetail';

interface TimelineCardProps {
    timelineData: TimelineItem[];
    onAddClick?: () => void;
}

export default function TimelineCard({ timelineData, onAddClick }: TimelineCardProps) {
    return (
        <div className="bg-white rounded-[8px] shadow-[4px_4px_8px_#00000005] p-6 w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray100 font-semibold text-[20px]">타임라인</h3>
                <button
                    className="flex items-center gap-1 bg-[#152C4A] text-white text-[16px] px-3 py-2 rounded-[4px] border border-main900"
                    onClick={onAddClick}
                >
                    <span className="text-lg leading-none">+</span>
                    타임라인 추가
                </button>
            </div>

            {timelineData.length === 0 ? (
                <div className="w-full bg-gray5 rounded-[10px] px-4 py-6 text-center">
                    <p className="text-[18px] text-gray90">타임라인이 설정되지 않았습니다</p>
                </div>
            ) : (
                <div className="mt-4">
                    {timelineData.map((item, index) => {
                        const isOnlyOne = timelineData.length === 1;
                        //  const isFirst = index === 0;
                        //const isLast = index === timelineData.length - 1;

                        return (
                            <div className="flex relative rounded-[4px] px-4 py-3">

                                {!isOnlyOne && (
                                    <div className="absolute top-0 bottom-0 left-[calc(16px+10px)] w-[2px] bg-[#3396FF] z-0" />

                                )}


                                <div className="w-[20px] flex justify-center relative z-10 mr-2">
                                    <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center">
                                        <CheckBlue />
                                    </div>
                                </div>


                                <div className="flex-1">
                                    <p className="text-[18px] font-medium text-black mb-[2px]">{item.title}</p>
                                    <div className="flex items-center text-[16px] text-gray70 mb-[2px]">
                                        <ClockFilled width={18} height={18} />
                                        <span className="ml-2">{item.time}</span>
                                    </div>
                                    <div className="flex items-center text-[16px] text-gray70">
                                        <MapFilled width={18} height={18} />
                                        <span className="ml-2">{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}