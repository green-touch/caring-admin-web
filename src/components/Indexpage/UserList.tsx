import SortBox from '@_components/Indexpage/SortBox';
import { ChevronRightMain900 } from '@_assets/icon';
import UserAvatarWithStatus from '../common/UserProfileIcon/UserIconWithStatus';
import UserStatusBadge from './UserStatusBadge';
import { UserListdata } from '@_constants/indexpage';

export default function UserList() {
  return (
    <>
      <div className="flex justify-between items-center px-1 mb-3">
        <div className="flex items-center gap-2 mt-2">
          <h2 className="text-[24px] font-bold leading-[28px] text-black whitespace-nowrap">
            사용자 리스트
          </h2>
          <ChevronRightMain900 className="w-6 h-6 text-main900" />
        </div>
        <div className="mt-2">
          <SortBox label="업데이트순" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-md mt-8 shadow-sm overflow-x-auto">
        <table className="table-fixed min-w-[800px] w-full text-left">
          <thead className="text-gray70 text-[15px] border-b border-gray20">
            <tr>
              <th className="pl-6 py-4 text-left align-middle">이름</th>
              <th className="px-2 py-4 text-center align-middle">배터리</th>
              <th className="px-2 py-4 text-center align-middle">화면상태</th>
              <th className="pr-6 py-4 text-right align-middle">업데이트 상태</th>
            </tr>
          </thead>
          <tbody>
            {UserListdata.map((user, i) => (
              <tr key={i} className="border-b border-gray5 last:border-none">
                <td className="pl-6 py-4 whitespace-nowrap max-w-[200px] truncate">
                  <div className="flex items-center gap-3">
                    <UserAvatarWithStatus image={user.image} connected={user.connected} />
                    <span className="text-[18px]">{user.name}</span>
                  </div>
                </td>
                <td className="px-2 py-4 text-center whitespace-nowrap">
                  <UserStatusBadge label={user.battery as '정상' | '경고'} />
                </td>
                <td className="px-2 py-4 text-center whitespace-nowrap">
                  <UserStatusBadge label={user.screen as '정상' | '경고'} />
                </td>
                <td className="pr-6 py-4 text-right text-[16px] whitespace-nowrap truncate max-w-[140px]">
                  {user.updated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
