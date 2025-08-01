import SosList from "@_components/Indexpage/SosList";
import SosHistoryFilterBox from "@_components/soshistorypage/HistoyFilter";


export default function SosHistoryPage() {
  return (
    <div className="px-[20px] mt-16 sm:px-[30px] md:px-[40px] lg:px-[50px] py-4">
      <h1 className="text-[24px] leading-[150%] font-bold text-[#1D1D1D] mb-6 pl-6">
        SOS내역 조회
      </h1>
      <div className="mt-10 mb-16 px-6">
        <SosHistoryFilterBox />
      </div>
      <div className="mt-10 px-6">
        <SosList title="요청 인원" count={3} showIcon={false} showSortBox={false} />
      </div>

    </div>
  );
}
