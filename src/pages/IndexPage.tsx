import TopStatusBox from '@_components/Indexpage/TopStatusBox';
import StatusList from '@_components/Indexpage/StatusList';
import SortBox from '@_components/Indexpage/SortBox';
import SosList from '@_components/Indexpage/SosList';
import UserList from '@_components/Indexpage/UserList';
export default function IndexPage() {
  return (
    <div className="px-[50px] py-4">
      <TopStatusBox networkStatus="양호" currentCount={10} />


      <div className="grid grid-cols-2 gap-16 mt-10 px-6">
        <StatusList
          title="미접속 리스트"
          sortText="접속순"
          items={['164시간 전', '144시간 전', '134시간 전']}
          type="time"
        />

        <StatusList
          title="상태별 데이터 리스트"
          sortText="접속순"
          items={[5, 2, 1]}
          type="count"
          headerRight={<SortBox label="경고순" />}
        />
      </div>

      <div className="mt-10 px-6">
        <SosList />
      </div>

      <div className="mt-10 px-6">
        <UserList />
      </div>
    </div>
  );
}
