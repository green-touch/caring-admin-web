import SortBox from '@_components/Indexpage/SortBox';
import StatusBadge from './StatusBadge1';
import { ChevronRightMain900 } from '@_assets/icon';
import NoprofileUserIcon from '@_components/common/UserProfileIcon/NoProfileUserIcon';
import { sosListData } from '@_types/indexpage';


export default function SosList() {
  return (
    <div>

      <div className="flex justify-between items-center px-1 mb-3">
        <div className="flex items-center gap-2 mt-[10px]">
          <h2 className="text-[25px] font-bold leading-[28.5px] text-black">
            SOS 리스트
          </h2>
          <ChevronRightMain900 className="w-6 h-6 text-main900" />
        </div>
        <div className="mt-[10px]">
          <SortBox label="진행상태" />
        </div>
      </div>


      <div className="bg-white p-4 rounded-md mt-8 shadow-sm">
        <table className="w-full text-left">
          <thead className="text-gray70 text-[15px] border-b border-gray20 ">
            <tr>
              <th className="py-3 pt-2 pl-6 align-top text-left">이름</th>
              <th className="pt-2 px-2 align-top text-center">진행상태</th>
              <th className="pt-2 px-2 align-top text-center">SOS 요청일</th>
              <th className="pt-2 px-2 align-top text-center">처리완료일</th>
              <th className="pt-2 px-2 align-top text-right pr-2"></th>
            </tr>
          </thead>


          <tbody>
            {sosListData.map((row, i) => (
              <tr key={i} className="border-b border-gray5 last:border-none">
                <td className="py-4 pl-6 flex items-center gap-2">
                  {row.image ? (
                    <img
                      src={row.image}
                      alt="profile"
                      className="w-[54px] h-[54px] rounded-full object-cover"
                    />
                  ) : (
                    <NoprofileUserIcon />
                  )}
                  <span className="text-[22px] ml-3">{row.name}</span>
                </td>
                <td className="px-2 align-middle text-center">
                  <StatusBadge
                    label={row.status}
                    type={row.status === '진행중' ? 'ing' : 'done'}
                  />
                </td>
                <td className="px-2 text-[19px] align-middle text-center">
                  {row.requestDate}
                </td>
                <td className="px-2 text-[19px] align-middle text-center">
                  {row.completeDate}
                </td>
                <td className="px-2 pr-6 align-middle text-right">
                  <button className="pr-6bg-white text-main900 text-[19px] font-semibold px-3 h-[48px] rounded-md border border-main900">
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