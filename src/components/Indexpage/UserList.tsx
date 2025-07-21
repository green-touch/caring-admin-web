import SortBox from '~/components/Indexpage/SortBox';
import { ChevronRightMain900 } from '@_assets/icon';
import UserAvatarWithStatus from '../common/UserProfileIcon/UserIconWithStatus';
import StatusBadge2 from './StatusBadge2';
import { UserListdata } from '@_types/indexpage';

export default function UserList() {


    return (
        <div>
            <div className="flex justify-between items-center px-1 mb-3">
                <div className="flex items-center gap-2 mt-[10px]">
                    <h2 className="text-[25px] font-bold leading-[28.5px] text-black">
                        사용자 리스트
                    </h2>
                    <ChevronRightMain900 className="w-6 h-6 text-main900" />
                </div>
                <div className="mt-[10px]">
                    <SortBox label="업데이트순" />
                </div>
            </div>

            <div className="bg-white p-4 rounded-md mt-8 shadow-sm">
                <table className="w-full text-left">
                     <thead className="text-gray70 text-[15px] border-b border-gray20 ">
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
                                <td className="pl-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <UserAvatarWithStatus image={user.image} connected={user.connected} />
                                        <span className="text-[22px]">{user.name}</span>
                                    </div>
                                </td>
                                <td className="px-2 py-4 text-center align-middle">
                                    <StatusBadge2 label={user.battery as '정상' | '경고'} />
                                </td>
                                <td className="px-2 py-4 text-center align-middle">
                                    <StatusBadge2 label={user.screen as '정상' | '경고'} />
                                </td>
                                <td className="pr-6 py-4 text-right text-[19px] align-middle">
                                    {user.updated}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}