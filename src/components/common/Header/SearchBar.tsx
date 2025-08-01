import { Search } from "@_assets/icon";
import SearchResultItem from "@_components/common/Header/SearchResultItem";
import { useState } from "react";

const mockResults = [
  { title: '사용자 계정관리', subtitle: '사용자 계정 정보 수정/삭제' },
  { title: '권한 설정', subtitle: '관리자 접근 권한 부여' },
  { title: '로그 관리', subtitle: '시스템 사용 내역 확인' },
];

export default function SearchBar() {
  const [searching, setSearching] = useState(false);

  return (
    <div className="relative flex-grow min-w-0 max-w-full lg:max-w-[720px]">
      <div className="h-[39px] flex items-center bg-white border border-gray-100 rounded-[4px] px-[16px] gap-[8px] w-full">
        <Search className="text-[#999999]" />
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          className="w-full bg-transparent text-gray70 placeholder-gray70 text-[15px] font-normal leading-[23px] font-['Noto Sans KR'] outline-none"
          onFocus={() => setSearching(true)}
          onBlur={() => setTimeout(() => setSearching(false), 150)}
        />
      </div>

      {searching && (
        <div className="absolute top-[39px] left-0 w-full z-10">
          {mockResults.map((item, idx) => (
            <SearchResultItem
              key={idx}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
