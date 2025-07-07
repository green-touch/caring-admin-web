export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1F26] px-6 py-12 flex flex-col gap-[20px] text-white">
     
      <div className="text-[32px] font-bold text-white">CARING</div>

    
      <div className="flex gap-2 text-[15px] leading-[23px]">
        <span className="text-white font-normal">케어링 이용약관</span>
        <span className="text-white font-bold">|</span>
        <span className="text-white font-bold">개인정보처리방침</span>
      </div>

      
      <div className="text-[13px] leading-[18px] text-white opacity-70">
        ⓒ CARING. All rights reserved.
      </div>
    </footer>
  );
}
