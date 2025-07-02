import SearchBar from "./Header/SerachBar";
import UserInfo from "./Header/UserInfo";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray10 shadow-[0_1px_4px_#0C0C0D0D] px-4 sm:px-6 lg:px-10 py-[12px]">
      <div className="flex flex-nowrap justify-between items-center gap-x-4">
        <SearchBar />
        <UserInfo />
      </div>
    </header>
  );
}
