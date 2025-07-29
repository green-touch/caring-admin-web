import TopStatusBox from '@_components/Indexpage/TopStatusBox';
import StatusList from '@_components/Indexpage/StatusList';
import SortBox from '@_components/Indexpage/SortBox';
import SosList from '@_components/Indexpage/SosList';
import UserList from '@_components/Indexpage/UserList';

export default function IndexPage() {
  return (
    <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-4">
      <TopStatusBox networkStatus="양호" currentCount={10} />

      <div className="flex flex-col lg:flex-row gap-6 mt-10 px-6 items-stretch">
        <div className="w-full lg:w-1/2 min-w-[340px]">
          <StatusList
            title="미접속 리스트"
            sortText="접속순"
            type="time"
            items={[
              { id: 'u1', name: '홍길동', time: 164 },
              { id: 'u2', name: '김영희', time: 144 },
              { id: 'u3', name: '이철수', time: 134 },
            ]}
          />
        </div>

        <div className="w-full lg:w-1/2 min-w-[340px]">
          <StatusList
            title="상태별 데이터 리스트"
            sortText="접속순"
            type="count"
            headerRight={<SortBox label="경고순" />}
            items={[
              { id: 's1', name: '이름', count: 5 },
              { id: 's2', name: '이름', count: 2 },
              { id: 's3', name: '이름', count: 1 },
            ]}
          />
        </div>
      </div>

      <div className="mt-10 px-6">
        <SosList />
      </div>

      <div className="mt-10 mb-16 px-6">
        <UserList />
      </div>
    </div>
  );
}
