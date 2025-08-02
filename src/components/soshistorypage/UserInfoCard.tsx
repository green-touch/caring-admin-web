
import UserIconWithStatus from '@_components/common/UserProfileIcon/UserIconWithStatus';

export default function UserInfoCard({ userData, sosData }: { userData: any; sosData: any }) {
    return (
        <div className="flex flex-col bg-white rounded-[8px] p-4 shadow-[4px_4px_8px_#00000005] w-full space-y-6">
            <div className="flex items-start gap-4">
                <UserIconWithStatus image={userData.image} connected={userData.connected} />
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-gray90">{userData.name}</h2>
                        <span className="text-sm text-[16px] font-bold text-main600">{sosData.status}</span>
                    </div>
                    <p className="mt-1 text-gray70">{userData.phone}</p>
                </div>
            </div>

            <div className="w-full h-px bg-gray10" />

            <div className="flex flex-col gap-6">
                <div>
                    <p className="text-[16px] text-gray70">요청자</p>
                    <p className="text-[16px] text-gray90 mt-2">{sosData.requester}</p>
                </div>
                <div>
                    <p className="text-[16px] text-gray70">요청 날짜</p>
                    <p className="text-[16px] text-gray90 mt-2">{sosData.requestDate}</p>
                </div>
                <div>
                    <p className="text-[16px] text-gray70">요청 장소</p>
                    <p className="text-[16px] text-gray90 mt-2">{sosData.location}</p>
                </div>
                <div className="bg-[#FAFAFA] p-4 rounded-md space-y-2 text-[16px] text-gray100">
                    {sosData.details.map((text: string, i: number) => (
                        <p key={i}>• {text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
