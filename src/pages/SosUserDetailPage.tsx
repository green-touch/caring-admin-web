import { useParams } from 'react-router-dom';
import { sosListData, UserListdata } from '@_constants/indexpage';
import { TimelineData } from '@_constants/sosDetail';



import SosStatusCard from '@_components/soshistorypage/SosStatusCard';
import TimelineCard from '@_components/soshistorypage/TimeLineCard';
import EmergencyContactCard from '@_components/soshistorypage/EmergencyContactCard';
import SosCountCard from '@_components/soshistorypage/SosCountCard';
import UserInfoCard from '@_components/soshistorypage/UserInfoCard';


export default function SosUserDetailPage() {
    const { id } = useParams();
    const sosData = sosListData.find((item) => item.id === Number(id));
    const userData = UserListdata.find((user) => user.id === sosData?.userId);

    if (!sosData || !userData) {
        return <div className="p-10 text-red-500">해당 데이터를 찾을 수 없습니다.</div>;
    }

    const timelineData = TimelineData;

   
    const emergencyContacts = [
        { name: '홍길순', relation: '자녀', phone: '010-1234-5678' },
        { name: '김철수', relation: '지인', phone: '010-1234-5678' },
        { name: '김영희', relation: '지인', phone: '010-1234-5678' },

    ];

    return (
        <div className="flex flex-col px-[50px] py-10 w-full">
            <div className="grid grid-cols-[4fr_1fr] gap-8">
                <div className="flex flex-col gap-4">
                    <UserInfoCard userData={userData} sosData={sosData} />
                    <SosStatusCard />
                    <EmergencyContactCard contacts={emergencyContacts} />
                </div>

                <div className="flex flex-col gap-4">
                    <SosCountCard />
                    <TimelineCard timelineData={timelineData} />

                </div>
            </div>
        </div>
    );
}
