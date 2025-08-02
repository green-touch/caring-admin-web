export default function SosCountCard() {
    return (
        <div className="bg-white rounded-[8px] p-6 shadow-[4px_4px_8px_#00000005] w-full">
            <h3 className="text-gray100 font-semibold text-[20px]">SOS 누적 횟수</h3>
            <div className="mt-4 flex flex-col gap-2 text-[16px] text-gray70">
                <div className="flex justify-between">
                    <span>경고</span>
                    <span className="text-gray90 font-medium">5회</span>
                </div>
                <div className="flex justify-between">
                    <span>위험</span>
                    <span className="text-gray90 font-medium">1회</span>
                </div>
            </div>
        </div>
    );
}


