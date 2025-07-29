import SortBox from '@_components/Indexpage/SortBox';
import ProcessBadge from './ProcessBadge';
import { ChevronRightMain900 } from '@_assets/icon';
import NoprofileUserIcon from '@_components/common/UserProfileIcon/NoProfileUserIcon';
import { sosListData } from '@_constants/indexpage';

export default function SosList() {
  return (
    <div>
      <div className="flex justify-between items-center px-1 mb-3">
        <div className="flex items-center gap-2 mt-2">
          <h2 className="text-[24px] font-bold leading-[28px] text-black whitespace-nowrap">
            SOS 리스트
          </h2>
          <ChevronRightMain900 className="w-6 h-6 text-main900" />
        </div>
        <div className="mt-2">
          <SortBox label="진행상태" />
        </div>
      </div>


      <div className="bg-white p-4 rounded-md mt-8 shadow-sm overflow-x-auto">
        <table className="table-fixed min-w-[800px] w-full text-left">
          <thead className="text-gray70 text-[15px] border-b border-gray20">
            <tr>
              <th className="py-3 pt-2 pl-6 text-left">이름</th>
              <th className="pt-2 px-2 text-center">진행상태</th>
              <th className="pt-2 px-2 text-center">SOS 요청일</th>
              <th className="pt-2 px-2 text-center">처리완료일</th>
              <th className="pt-2 px-2 text-right pr-2"></th>
            </tr>
          </thead>

          <tbody>
            {sosListData.map((row, i) => (
              <tr key={i} className="border-b border-gray5 last:border-none">
                <td className="py-4 pl-6 flex items-center gap-2 whitespace-nowrap max-w-[200px] truncate">
                  {row.image ? (
                    <img
                      src={row.image}
                      alt="profile"
                      className="w-[54px] h-[54px] rounded-full object-cover"
                    />
                  ) : (
                    <NoprofileUserIcon />
                  )}
                  <span className="text-[18px] ml-3">{row.name}</span>
                </td>
                <td className="px-2 text-center whitespace-nowrap">
                  <ProcessBadge
                    label={row.status}
                    type={row.status === '진행중' ? 'ing' : 'done'}
                  />
                </td>
                <td className="px-2 text-[16px] text-center whitespace-nowrap truncate max-w-[120px]">
                  {row.requestDate}
                </td>
                <td className="px-2 text-[16px] text-center whitespace-nowrap truncate max-w-[120px]">
                  {row.completeDate}
                </td>
                <td className="px-2 pr-6 text-right whitespace-nowrap">
                  <button className="bg-white text-main900 text-[16px] font-semibold px-3 h-[40px] rounded-md border border-main900">
                    타임라인 추가
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
