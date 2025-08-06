type ActionButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[10px] bg-main900 text-white text-[17px] font-medium leading-[26px] px-6 py-2 rounded-[8px] hover:opacity-90"
    >
      {label}
    </button>
  );
}
