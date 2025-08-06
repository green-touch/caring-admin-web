type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
     <h1 className="text-[24px] leading-[150%] font-bold text-gray90 mb-6 ">
      {text}
    </h1>
  );
}
